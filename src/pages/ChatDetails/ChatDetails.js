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
  Subtitle,
  Footer,
  FooterTab,
  Item,
  Input,
} from 'native-base';
import styles from './ChatDetails.Styles';

export default function ChatDetails({route, navigation}) {
  const {user} = route.params;

  const handleFilter = e => {
    const query = e;
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

      <Content>
        <Text>{user.message}</Text>
      </Content>
      <Footer style={styles.footer}>
        <FooterTab style={styles.footerTab}>
          <Item style={styles.left}>
            <Input
              onChangeText={text => handleFilter(text)}
              placeholder="Start typing..."
              // style={styles.searchBar}
            />
            <Icon name="attach" style={styles.attachIcon} />
            <Icon name="camera" style={styles.icon} />
          </Item>
          <Right style={styles.right}>
            <Button style={styles.sendButton}>
              <Icon name="send" style={styles.sendIcon} />
            </Button>
          </Right>
        </FooterTab>
      </Footer>
    </Container>
  );
}
