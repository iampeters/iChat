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
  Content,
} from 'native-base';
import globalStyles from '../../../Styles';
import styles from './Feeds.Styles';

export default function Feeds({navigation, route}) {
  return (
    <Container>
      {/* header */}
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate('Profile')}>
            <Thumbnail
              source={require('../../images/photo.jpg')}
              style={globalStyles.thumbnail}
            />
          </Button>
        </Left>
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
        <Text>Feeds</Text>
      </Content>
    </Container>
  );
}
