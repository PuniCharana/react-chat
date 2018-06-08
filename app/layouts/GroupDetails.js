import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Content, Item, Input, Fab, Header, Left, Body, Right, Button, Icon, Title, List, ListItem, Thumbnail } from 'native-base';
import User from '../components/User';
import CustomButton from '../components/CustomButton';
import AppHeader from '../components/AppHeader';
import GLOBALS from '../Globals'
export default GroupDetails = (props) => {

    var items = [];

    for (i = 0; i < 30; i++) {
        items.push("User Name " + i);
    }

    handleScroll = (event) => {
        console.log(event.nativeEvent.contentOffset.y);
    }

    return (

        <Container>
            <AppHeader>
                <Left style={{flex: 1}}>
                    <Button transparent onPress={() => Actions.pop()}>
                        <Icon style={{ color: GLOBALS.COLOR.WHITE }} name='arrow-back' />
                    </Button>
                </Left>
                <Body style={{ flex: 3 }}>
                    <Title style={{ color: GLOBALS.COLOR.WHITE }} >{props.title}</Title>
                </Body>
                <Right>
                    <Button transparent onPress={() => console.log("Edit")}>
                        <Icon style={{ color: GLOBALS.COLOR.WHITE }} name='md-create' />
                    </Button>
                </Right>
            </AppHeader>
            <ScrollView style={{ flexGrow: 1 }} onScroll={this.handleScroll}>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image
                        style={styles.thumbnail}
                        source={{ uri: 'https://cdn.pixabay.com/photo/2018/05/22/14/00/sadness-3421489_960_720.jpg' }}
                    />
                    <View style={{ flexDirection: 'column' }}>

                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>{props.title}</Text>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                        }}>Saket, New Delhi</Text>
                    </View>
                </View>

                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row', padding: 16,
                }}>
                    <Text style={styles.titleParticipants}>{items.length} PARTICIPANTS</Text>

                    <CustomButton onButtonPress={() => console.log("")} text="JOIN GROUP" />
                </View>

                <List dataArray={items}
                    renderRow={(item, index) => <User name={item} />}>
                </List>

            </ScrollView>
        </Container>

    );
}

const styles = StyleSheet.create({
    thumbnail: {
        width: 100,
        height: 100,
        margin: 16,
    },

    titleParticipants: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold'
    },

    button: {
        maxHeight: 40,
        padding: 10,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#841584'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
});