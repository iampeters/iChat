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
} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {getActiveChats} from '../../../redux/Actions/chatActions';
import {logout} from '../../../redux/Actions/userActions';

export default function Chat({navigation, route}) {
  const users = useSelector(state => state.activeChats);
  // reverse user array
  users.reverse();

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (!auth.isAuthenticated) {
        dispatch(logout(navigation));
        navigation.navigate('Splash');
      } else {
        // get active chats
        dispatch(getActiveChats());
      }
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, navigation]);

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
        dataArray={users}
        renderRow={user => (
          <ListItem
            avatar
            onPress={() => navigation.navigate('ChatDetails', {user})}>
            <Left>
              <Thumbnail source={require('../../images/photo.jpg')} />
            </Left>
            <Body>
              <Text>{user.name}</Text>
              <Text note>{user.message}</Text>
            </Body>
            <Right>
              <Text note>{user.timestamp}</Text>
            </Right>
          </ListItem>
        )}
        keyExtractor={(user, index) => index.toString()}
      />
    </Container>
  );
}
