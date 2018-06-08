import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import firebase from '../firebase';

export default class Splash extends Component {

    componentDidMount = () => {
        console.log("componentDidMount")
        setTimeout(function(){ Actions.replace("login") }, 100);
        // firebase.auth().onAuthStateChanged(function (user) {
        //     if (user) {
        //         // User is signed in.
        //         var displayName = user.displayName;
        //         var email = user.email;
        //         var emailVerified = user.emailVerified;
        //         var photoURL = user.photoURL;
        //         var isAnonymous = user.isAnonymous;
        //         var uid = user.uid;
        //         var providerData = user.providerData;
        //         console.log(user);
        //         Actions.replace("home");
        //     } else {
        //         // User is signed out.
        //         console.log("User is signed out.");
        //         Actions.replace("login");
        //     }
        // });

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Splash
        </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});