import React, {useState, useEffect} from 'react';
import {
  Container,
  Text,
  Header,
  Icon,
  Button,
  Item,
  Input,
  ListItem,
  List,
  Left,
  Thumbnail,
  Body,
} from 'native-base';
import {useSelector} from 'react-redux';
import {StackActions} from '@react-navigation/native';

export default function Contacts({navigation}) {
  let contacts = [
    {name: 'Peters Chikezie', info: 'xoxo', username: 'iampeters'},
    {name: 'Oba', info: 'Hello world', username: 'oba'},
    {name: 'Sinach', info: 'Who goes there?', username: 'sinach'},
  ];
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const auth = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    const subscription = navigation.addListener('focus', () => {
      !auth && navigation.dispatch(StackActions.replace('Splash'));
    });
    return subscription;
  }, [auth, navigation]);

  const handleFilter = e => {
    const query = e;
    const filter = contacts.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredContacts(filter);
  };

  return (
    <Container>
      {/* header */}
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            onChangeText={text => handleFilter(text)}
            placeholder="Search"
          />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      {/* Body */}

      <List
        dataArray={filteredContacts}
        renderRow={user => (
          <ListItem
            avatar
            onPress={() => navigation.navigate('ChatDetails', {user})}>
            <Left>
              <Thumbnail source={require('../../images/photo.jpg')} />
            </Left>
            <Body>
              <Text>{user.name}</Text>
              <Text note>{user.info}</Text>
            </Body>
          </ListItem>
        )}
        keyExtractor={(user, index) => index.toString()}
      />
    </Container>
  );
}
