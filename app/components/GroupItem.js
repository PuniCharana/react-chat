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

export default GroupItem = (props) => {

    _onViewGroup = (item) => {
        console.log(item);
        Actions.groupdetails({ title: item });
    }

    return (
        <ListItem avatar button onPress={() => this._onViewGroup(props.title)}>
            <Left>
                <Thumbnail small source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
            </Left>
            <Body>
                <Text>{props.title}</Text>
                <Text style={{fontSize: 12}}>Saket Mall, New Delhi</Text>
            </Body>
            <Right>
                <Text note>169 m</Text>
                <Text note>1.2 km</Text>
            </Right>
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