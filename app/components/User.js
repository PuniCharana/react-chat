import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Content, Item, Input, Fab, Header, Left, Body, Right, Button, Icon, Title, List, ListItem, Thumbnail } from 'native-base';

export default User = (props) => {

    _onUserItemClick =(item)=> {
        Actions.profile({user: item});
    }

    return (
        <ListItem avatar button onPress={() => this._onUserItemClick(props.name)}>
            <Left>
                <Thumbnail small source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
            </Left>
            <Body>
                <Text>{props.name}</Text>
                <Text style={{fontSize: 12}}>User status</Text>
            </Body>
        </ListItem>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

