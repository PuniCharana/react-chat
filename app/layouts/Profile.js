import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Container, Content, Item, Input, Fab, Header, Left, Body, Right, Button, Icon, Title, List, ListItem, Thumbnail } from 'native-base';
import User from '../components/User';
import CustomButton from '../components/CustomButton';
import GLOBALS from '../Globals'

export default class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var userName = this.props.user;

        if (this.props.user == undefined) {
            userName = "Full Name"
        }

        var items = [];
        for (i = 0; i < 10; i++) {
            items.push("Group Name " + i);
        }

        return (

            <Container>
                <AppHeader>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon style={{ color: GLOBALS.COLOR.WHITE }} name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                        <Title style={{ color: GLOBALS.COLOR.WHITE }} >{this.props.title}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => console.log("Edit")}>
                            <Icon style={{ color: GLOBALS.COLOR.WHITE }} name='md-create' />
                        </Button>
                    </Right>
                </AppHeader>
                <ScrollView style={styles.container}>

                    <View style={{ alignItems: 'center', }}>
                        <Image
                            style={styles.thumbnail}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2018/05/22/14/00/sadness-3421489_960_720.jpg' }}
                        />

                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}>{userName}</Text>
                        <Text>Saket, New Delhi.</Text>
                        <Text>Lorem ipsum dolor amit.</Text>

                        <View style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}>
                            <CustomButton onButtonPress={() => console.log("REPORT")} text="REPORT" />

                            <CustomButton onButtonPress={() => console.log("BLOCK")} text="BLOCK" />

                            <CustomButton onButtonPress={() => Actions.chat({ title: userName })} text="MESSAGE" />

                        </View>
                    </View>


                    <Text style={{
                        fontSize: 16,
                        margin: 16,
                        alignSelf: 'flex-start',
                        fontWeight: 'bold'
                    }}>Groups in common</Text>

                    <List dataArray={items}
                        renderRow={(item, index) => <GroupItem title={item} />}>
                    </List>

                </ScrollView>

            </Container>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    titleParticipants: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold'
    },

    thumbnail: {
        width: 100,
        height: 100,
        margin: 16,
    },

});