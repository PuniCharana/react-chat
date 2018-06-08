import React, { Component } from 'react';

import { Header } from 'native-base';
import GLOBALS from '../Globals';

export default AppHeader = (props) => {

    return (
        <Header iosBarStyle="light-content" androidStatusBarColor={GLOBALS.COLOR.PRIMARYDARK} style={{ backgroundColor: GLOBALS.COLOR.PRIMARY }} >
            {props.children}
        </Header>
    );
}
