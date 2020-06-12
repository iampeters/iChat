import React, {useState, useEffect} from 'react';
import {
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Button,
  Thumbnail,
  Subtitle,
  Footer,
  FooterTab,
  Item,
  Input,
  ActionSheet,
  Toast,
  View,
} from 'native-base';
import {Clipboard, Alert} from 'react-native';
import styles from './ChatDetails.Styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  getChats,
  setChats,
  setActiveChats,
} from '../../../redux/Actions/chatActions';
import {StackActions} from '@react-navigation/native';
import LeftBubble from '../../components/Bubbles/LeftBubble';
import RightBubble from '../../components/Bubbles/RightBubble';
import {TouchableWithoutFeedback, FlatList} from 'react-native-gesture-handler';

export default function ChatDetails({route, navigation}) {
  const {user} = route.params;
  const auth = useSelector(state => state.auth.isAuthenticated);
  const userDetails = useSelector(state => state.user);
  const [message, setMessage] = useState('');
  const incoming = useSelector(state => state.incoming);
  const chats = incoming.filter(item => item.receiver === user.username);
  chats.reverse();

  const dispatch = useDispatch();
  const [highlightColor, setHighlightColor] = useState('transparent');
  const [copiedText, setCopiedText] = useState('');
  // let listRef = React.useRef();

  // buttons
  const BUTTONS = [
    {text: 'Forward', icon: 'ios-share-alt'},
    {text: 'Copy text', icon: 'copy'},
    {text: 'Delete', icon: 'trash'},
    {text: 'Cancel', icon: 'close'},
  ];
  const DESTRUCTIVE_INDEX = 2;
  const CANCEL_INDEX = 3;

  // useEffect(() => {
  //   dispatch(getChats());
  // }, [chats, dispatch]);

  useEffect(() => {
    const subscription = navigation.addListener('focus', () => {
      !auth && navigation.dispatch(StackActions.replace('Splash'));
    });
    return subscription;
  }, [auth, dispatch, navigation]);

  // handle submit
  const handleSubmit = () => {
    if (message.length !== 0) {
      const chat = {
        message: message,
        timestamp: `${new Date().getHours()}:${new Date().getMinutes()}`,
        sender: userDetails.username,
        receiver: user.username,
        name: user.name,
        delivered: false,
        status: 'sent',
        read: false,
        messageCount: 1,
      };

      user.message = message;
      user.timestamp = chat.timestamp;
      user.read = chat.read;
      user.delivered = chat.delivered;
      user.messageCount = chat.messageCount;
      user.sender = chat.sender;
      user.receiver = chat.receiver;

      dispatch(setChats(chat));
      dispatch(setActiveChats(user));
      setMessage('');
    }
  };

  // actions
  const copyToClipboard = text => {
    Clipboard.setString(text);
    fetchCopiedText();

    Toast.show({
      text: 'Copied to clipboard!',
      buttonText: 'Dismiss',
      type: 'success',
      position: 'bottom',
      duration: 1000,
    });
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };

  // handle delete
  const deleteMessage = chat => {
    console.log('deleted', chat);
  };

  const confirmDelete = chat => {
    Alert.alert(
      'Delete message from ' + chat.sender,
      '',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Delete for me', onPress: deleteMessage(chat)},
      ],
      {cancelable: true},
    );
    return true;
  };

  const handleLongPressAction = (type, chat) => {
    if (type) {
      switch (type.text) {
        case 'Copy text': {
          copyToClipboard(chat.message);
          break;
        }
        case 'Forward': {
          break;
        }
        case 'Delete': {
          confirmDelete(chat);
          break;
        }
        default:
          return;
      }
    }
  };

  const handleLongPress = chat => {
    setHighlightColor('');
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
      },
      buttonIndex => {
        handleLongPressAction(BUTTONS[buttonIndex], chat);
      },
    );
  };

  const renderRow = item => {
    if (item && item.sender === userDetails.username) {
      return (
        <TouchableWithoutFeedback
          onLongPress={() => handleLongPress(item)}
          style={{backgroundColor: highlightColor}}>
          <RightBubble
            text={item.message}
            timestamp={item.timestamp}
            status={item.status}
          />
        </TouchableWithoutFeedback>
      );
    } else {
      return (
        <TouchableWithoutFeedback
          onLongPress={() => handleLongPress(item)}
          style={{backgroundColor: highlightColor}}>
          <LeftBubble text={item.message} timestamp={item.timestamp} />
        </TouchableWithoutFeedback>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon type="Ionicons" name="arrow-back" style={{marginRight: 5}} />
            <Thumbnail
              source={require('../../images/photo.jpg')}
              style={styles.thumbnail}
            />
          </Button>
        </Left>
        <Body style={styles.nameStatus}>
          <Title>{user.name}</Title>
          <Subtitle style={styles.status} note>
            Online
          </Subtitle>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
          <Button transparent>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>

      {/* Body */}
      <FlatList
        style={styles.chatContainer}
        data={chats}
        renderItem={({item}) => renderRow(item)}
        // initialScrollIndex={Object(chats, chats).length}
        scrollEnabled
        inverted
        snapToEnd
        // ref={ref => (listRef = ref)}
        keyExtractor={(chat, index) => index.toString()}
      />

      {/* footer */}
      <Footer style={styles.footer}>
        <FooterTab style={styles.footerTab}>
          <Item style={styles.left}>
            <Input
              onChangeText={text => setMessage(text)}
              placeholder="Start typing..."
              value={message}
              multiline
              // style={styles.searchBar}
            />
            <Icon name="attach" style={styles.attachIcon} />
            <Icon name="camera" style={styles.icon} />
          </Item>
          <Right style={styles.right}>
            <Button style={styles.sendButton} onPress={handleSubmit}>
              <Icon name="send" style={styles.sendIcon} />
            </Button>
          </Right>
        </FooterTab>
      </Footer>
    </View>
  );
}
