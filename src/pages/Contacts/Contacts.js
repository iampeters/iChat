import React, {useEffect, useState} from 'react';
import {
  Container,
  Text,
  Header,
  Icon,
  Button,
  Content,
  Item,
  Input,
  ListItem,
  List,
  Left,
  Thumbnail,
  Body,
} from 'native-base';

export default function Contacts({navigation}) {
  let contacts = [
    {name: 'Peters Chikezie', info: 'xoxo'},
    {name: 'Oba', info: 'Hello world'},
    {name: 'Sinach', info: 'Who goes there?'},
  ];

  const [filteredContacts, setFilteredContacts] = useState(contacts);

  // useEffect(() => {
  //   return () => {
  //   };
  // });

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

      <Content>
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
      </Content>
    </Container>
  );
}
