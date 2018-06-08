import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Subtitle, Left, Body, Right, Button, Icon, Title, List, ListItem, Thumbnail } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';
import AppHeader from '../components/AppHeader';
import GLOBALS from '../Globals';

export default class Chat extends Component {

    state = {
        messages: [],
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 2,
                    text: 'Hello React Native',
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                }
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    _gotoGroupDetails = (title) => {
        Actions.groupdetails({ title: title })
    }

    render() {
        const { title } = this.props;
        return (

            <Container>
                <AppHeader>
                    <Left style={{flex: 1}}>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon style={{ color:  GLOBALS.COLOR.WHITE }} name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 3}}>
                        <Title style={{ color: GLOBALS.COLOR.WHITE }} onPress={() => this._gotoGroupDetails(title)}>{title}</Title>
                        <Subtitle style={{ color: GLOBALS.COLOR.WHITE, fontSize: 12 }} onPress={() => this._gotoGroupDetails(title)} >tap here to view details</Subtitle>
                    </Body>
                    <Right />
                </AppHeader>

                <GiftedChat
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});