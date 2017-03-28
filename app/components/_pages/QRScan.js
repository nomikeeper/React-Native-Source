import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
  View,
  BackAndroid,
  Alert
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import BarcodeScanner from 'react-native-barcodescanner';
import createFragment from 'react-addons-create-fragment';
import api from '../../api/api.js';

export default class QRScan extends Component {
    constructor(props) {
        super(props);
        this.temp = {
            userList: this.props.userList,
            navigator: this.props.navigator
        }
        this.state = {
        torchMode: 'off',
        cameraType: 'back',
    };
}
    async barcodeReceived(e) {
        var result = e.data.split("/");
        let obj = await fetch(URL,{
            method: 'get',
            dataType: 'json',
            header:{
                "X-Url": result[result.length-1],
            }
        }).then((response) => {return response.json()});
        obj != null ? Alert.alert(obj.data.key) : Alert.alert("NO");
    }
    studentAdded(e){
        Alert.alert("Certainly its called");
        /*this.props.userList.push(e);
        this.props.navigator.push({
            id: 'index'
        });*/
    }
    render() {
        BackAndroid.addEventListener("hardwareBackPress", () => {
            if (this.props.navigator.getCurrentRoutes().length > 1) {
                this.props.navigator.pop()
                return true // do not exit app
            } else {
                return false // exit app
            }
        })
        return (
            <BarcodeScanner
                onBarCodeRead={this.barcodeReceived.bind(this)}
                style={{ flex: 1 }}
                torchMode={this.state.torchMode}
                cameraType={this.state.cameraType} 
                />
        )
    }
}
const URL = "http://api.lesson-time.com/v2/auth/url";
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    borderRadius: 3,
    padding: 32,
    width: 100,
    marginTop: 64,
    marginBottom: 64,
  },

  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  buttonTouchable: {
    padding: 16,
  },
});
