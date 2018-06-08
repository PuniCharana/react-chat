import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Home from './layouts/Home';
import Login from './layouts/Login';
import Splash from './layouts/Splash';
import Profile from './layouts/Profile';
import Search from './layouts/Search';
import Chat from './layouts/Chat';
import GroupDetails from './layouts/GroupDetails';

export default App = () => {

  const onBackAndroid = () => {
    Actions.pop();
    return true; // Return true to stay, or return false to exit the app.
  };

  return <Router tintColor='#841584' sceneStyle={{ backgroundColor: '#fff' }} backAndroidHandler={onBackAndroid}>
    <Scene key="root">
      <Scene key="splash" hideNavBar={true} initial component={Splash} title="Splash" />
      <Scene key="login" hideNavBar={true} component={Login} title="Login" />
      <Scene key="home" hideNavBar={true} component={Home} title="Home" />
      <Scene key="profile" hideNavBar={true} component={Profile} title="Profile" />
      <Scene key="search" hideNavBar={true} component={Search} title="Search" />
      <Scene key="groupdetails" hideNavBar={true} component={GroupDetails} title="GroupDetails" />
      <Scene key="chat" hideNavBar={true} component={Chat} title="Chat" />
    </Scene>
  </Router>
}