import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import firebase from '../firebase';
import LoginButton from '../components/LoginButton';


export default Login = () => {
    const gotoHome = () => {
        console.log("gotoHome");
        Actions.replace("home");

        // firebase.auth()
        //         .signInAnonymously()
        //         .then((user) => console.log(user))
        //         .catch(err => console.log(err))
    }
    return (
        <View style={styles.container}>

            <View style={styles.logoSection}>
                <Text style={styles.welcome}>LOGO</Text>
            </View>
            <View style={styles.loginSection}>
                
                <LoginButton icon="logo-facebook" color="3b5998" onButtonPress={gotoHome} text="Sign in with Facebook"/>
                <LoginButton icon="logo-twitter" color="1da1f2" onButtonPress={gotoHome} text="Sign in with Twitter"/>
                    
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    logoSection: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    loginSection: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

});