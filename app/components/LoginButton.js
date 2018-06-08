import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';

export default LoginButton = (props) => {

    var buttonColor =  props.color? "#"+props.color: "#841584";

    _onButtonPress = () => {
        props.onButtonPress()
    }

    return (
        <TouchableOpacity
            style={[styles.button, {backgroundColor: buttonColor }]}
            onPress={this._onButtonPress}>
            <Icon fontSize={24} style={{ color: '#fff', marginRight: 10 }} name={props.icon} />
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        maxHeight: 48,
        padding: 10,
        margin: 10,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
});

