import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import GLOBALS from '../Globals';

export default CustomButton = (props) => {

    _onButtonPress = () => {
        props.onButtonPress()
    }

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={this._onButtonPress}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        maxHeight: 40,
        padding: 10,
        margin: 10,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: GLOBALS.COLOR.ACCENT
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
});

