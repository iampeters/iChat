import React from 'react';
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
  Content,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';
// import styles from './Chat.Styles';

export default function Chat({navigation, route}) {
  const users = [
    {name: 'Peters Chikezie', message: 'hello', timestamp: '3:22pm'},
    {name: 'Oba', message: 'hi', timestamp: '1:01am'},
  ];
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

      <Content>
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
      </Content>
    </Container>
  );
}
