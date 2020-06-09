import React, {useEffect} from 'react';
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
  View,
} from 'native-base';
import {useSelector} from 'react-redux';
import {StackActions} from '@react-navigation/native';
import styles from '../Chat/Chat.Styles';

export default function Chat({navigation, route}) {
  const chats = useSelector(state => state.activeChats);
  chats.reverse();
  const auth = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    const subscription = navigation.addListener('focus', () => {
      !auth && navigation.dispatch(StackActions.replace('Splash'));
    });
    return subscription;
  }, [auth, chats, navigation]);

  return (
    <Container>
      {/* header */}
      <Header>
        <Body>
          <Title>{route.name}</Title>
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
        dataArray={chats}
        renderRow={chat => (
          <ListItem
            avatar
            onPress={() => navigation.navigate('ChatDetails', {chat})}>
            <Left>
              <Thumbnail source={require('../../images/photo.jpg')} />
            </Left>
            <Body>
              <Text>{chat.name}</Text>
              <Text note>{chat.message}</Text>
            </Body>
            <Right>
              <Text note>{chat.timestamp}</Text>
              {chat.messageCount > 0 && (
                <View styles={styles.badgeContainer}>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{chat.messageCount}</Text>
                  </View>
                </View>
              )}
            </Right>
          </ListItem>
        )}
        keyExtractor={(chat, index) => index.toString()}
      />
    </Container>
  );
}
