/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component,} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import IndexPage from './app/components/_pages/index.js';
import AddStudent from './app/components/_pages/_addStudent';
import LoggedInIndex from './app/components/_pages/loggedInIndex';
import Assignment from './app/components/_pages/assignment';
import Posts from './app/components/_pages/posts';

//QR Scanner import
import QRScan from './app/components/_pages/QRScan'

export default class LessonTime extends Component {
    constructor(props){
            super(props);
            this.userList = this.userList == null ? this.userList = [] : this.userList
}
  
  render() {
    return (
            <Navigator 
                initialRoute = {{ id: 'index'}}
                renderScene={(route, navigator) => this.navRenderScene(route, navigator,this.userList)}
            />
    );
  }
 navRenderScene(route, navigator, userList){
    switch(route.id){
        case 'index':
            return (<IndexPage navigator = {navigator} userList = {userList}/>);
        case 'addStudent':
            return (<AddStudent navigator = {navigator} />);
        case 'QRScan':
            return (<QRScan navigator = {navigator} userList = {userList}/>);
        case 'loggedInIndex':
            return (<LoggedInIndex navigator = {navigator} />);
        case 'assignment':
            return(<Assignment navigator = {navigator} data= {route.date} />);
        case 'posts':
            return(<Posts navigator = {navigator} />);
  }
}
}
AppRegistry.registerComponent('LessonTime', () => LessonTime);
