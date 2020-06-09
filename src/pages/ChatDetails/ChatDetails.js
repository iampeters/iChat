import React, {useState, useEffect} from 'react';
import {
  Container,
  Text,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Button,
  List,
  ListItem,
  Thumbnail,
  Subtitle,
  Footer,
  FooterTab,
  Item,
  Input,
} from 'native-base';
import styles from './ChatDetails.Styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  getChats,
  setChats,
  setActiveChats,
} from '../../../redux/Actions/chatActions';
import {StackActions} from '@react-navigation/native';

export default function ChatDetails({route, navigation}) {
  const {user} = route.params;
  const auth = useSelector(state => state.auth.isAuthenticated);
  const [message, setMessage] = useState('');
  const chats = useSelector(state => state.incoming);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChats());
  }, [dispatch]);

  useEffect(() => {
    const subscription = navigation.addListener('focus', () => {
      !auth && navigation.dispatch(StackActions.replace('Splash'));
    });
    return subscription;
  }, [auth, dispatch, navigation]);

  const handleSubmit = () => {
    if (message.length !== 0) {
      const chat = {
        message: message,
        timestamp: `${new Date().getHours()}:${new Date().getMinutes()}`,
        username: 'john',
        friend: user.username,
        delivered: false,
        read: false,
        messageCount: 1,
      };

      user.message = message;
      user.timestamp = chat.timestamp;
      user.read = chat.read;
      user.delivered = chat.delivered;
      user.messageCount = chat.messageCount;

      dispatch(setChats(chat));
      dispatch(setActiveChats(user));
      setMessage('');
    }
  };

  return (
    <Container>
      {/* header */}
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
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

      <List
        style={styles.chatContainer}
        dataArray={chats}
        renderRow={chat =>
          chat && chat.username === 'john' ? (
            // right bubble
            <ListItem style={styles.rightBubble}>
              <Body>
                <Text>{chat.message}</Text>
              </Body>
              <Right>
                <Text note>{chat.timestamp}</Text>
              </Right>
            </ListItem>
          ) : (
            // left bubble
            chat && (
              <ListItem style={styles.leftBubble}>
                <Body>
                  <Text style={styles.leftBubbleText}>{chat.message}</Text>
                </Body>
                <Right>
                  <Text note style={styles.leftTimeStamp}>
                    {chat.timestamp}
                  </Text>
                </Right>
              </ListItem>
            )
          )
        }
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
    </Container>
  );
}
