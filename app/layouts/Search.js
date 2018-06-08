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

import GroupItem from '../components/GroupItem';
import AppHeader from '../components/AppHeader';

import GLOBALS from '../Globals'
export default class Search extends Component {

    constructor() {
        super();
        this.state = {
            searchTerm: "",
            items: []
        }
    }

    componentDidMount() {
        //Get this.props
        console.log(this.props);
    };

    _addNewGroup = () => {

    }

    _searchGroup = () => {
        console.log(this.state.searchTerm);

        var groups = [];
        for (i = 0; i < 20; i++) {
            groups.push("Group Name " + i);
        }
        this.setState({
            items: groups
        });
    }

    _onTextChange = (text) => {

        if (text.length > 1) {
            this.setState({
                searchTerm: text
            })
        }
    }

    render() {
        var items = this.state.items;

        return (

            <Container>
                <AppHeader searchBar rounded>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon style={{ color: GLOBALS.COLOR.WHITE }} name='arrow-back' />
                        </Button>
                    </Left>
                    <Item style={{ flex: 2, borderBottomWidth: 1, borderBottomColor: GLOBALS.COLOR.WHITE}}>
                        <Icon style={{color: GLOBALS.COLOR.WHITE}} name="ios-search" />
                        <Input style={{color: GLOBALS.COLOR.WHITE}} placeholderTextColor={GLOBALS.COLOR.WHITE} onChangeText={(text) => this._onTextChange(text)} placeholder="Search Group" />
                    </Item>
                    <Right>
                        <Button transparent onPress={this._searchGroup}>
                            <Text style={{ color: GLOBALS.COLOR.WHITE }}>SEARCH</Text>
                        </Button>
                    </Right>

                </AppHeader>

                <View style={styles.container}>

                    <List dataArray={items}
                        renderRow={(item, index) => <GroupItem title={item} />}>
                    </List>

                    <Fab
                        style={{ backgroundColor: GLOBALS.COLOR.ACCENT }}
                        position="bottomRight"
                        onPress={this._addNewGroup}>
                        <Icon name="add" />
                    </Fab>

                </View>

            </Container>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});