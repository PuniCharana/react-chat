import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    StyleSheet,
    View,
    Image
} from 'react-native';

import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, List, ListItem, Thumbnail } from 'native-base';
import {Actions} from 'react-native-router-flux';

import ChatItem from '../components/ChatItem';
import AppHeader from '../components/AppHeader';
import GLOBALS from '../Globals';

export default Home = () => {
    var items = ['Group Name 1', 'Group Name 2', 'Group Name 3', 'Group Name 4', 'Group Name 5', 'Group Name 6', 'Group Name 7', 'Group Name 8', 'Group Name 9', 'Group Name 10'];

    _gotoProfile =()=> {
        Actions.profile();
    }

    _gotoSearch =()=> {
        Actions.search();
    }

    return (
        <Container>
            <AppHeader>
                <Left style={{flex: 1}}>
                    <Button transparent onPress={_gotoProfile}>
                        <Icon style={{color: GLOBALS.COLOR.WHITE }} name='person' />
                    </Button>
                </Left>
                <Body style={{flex: 3}}>
                    <Title style={{color: GLOBALS.COLOR.WHITE}} >Social</Title>
                </Body>
                <Right>
                    <Button transparent onPress={_gotoSearch}>
                        <Icon style={{color: GLOBALS.COLOR.WHITE}} name='search' />
                    </Button>
                </Right>
            </AppHeader>

            <Content>

                <List dataArray={items}
                    renderRow={(item) => <ChatItem title={item}/>}>
                </List>

            </Content>

        </Container>
    );
}

const styles = StyleSheet.create({

});