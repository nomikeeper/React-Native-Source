import React, {Component} from 'react';
import{
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Alert,
    BackAndroid
} from 'react-native';

export default class AddStudent extends Component{
    constructor(props){
        super(props);
        this.state ={
            pressStatus: false
        }
    }
    _onHideUnderlay(){
        this.setState({pressStatus: false});
    }
    _onShowUnderlay(){
        this.setState({pressStatus: true});
    }
    doSomething(){
        this.props.navigator.resetTo({
            id: 'QRScan'
        });
    }
    
    render(){
        BackAndroid.addEventListener("hardwareBackPress", () => {
            if (this.props.navigator.getCurrentRoutes().length > 1) {
                this.props.navigator.pop()
                return true // do not exit app
            } else {
                return false // exit app
            }
        })
        return(
            <View style={styles.container}>
                <TouchableHighlight
                underlayColor='rgba(0,0,0,0)'
                    style={(this.state.pressStatus ? styles.btnPressed : styles.btnNormal)}
                    onHideUnderlay={this._onHideUnderlay.bind(this)}
                    onShowUnderlay={this._onShowUnderlay.bind(this)}
                    onPress={() => this.doSomething()}
                    >         
                    <Text style={(this.state.pressStatus ? styles.txtPressed : styles.txtNormal)}> QR Launcher </Text>       
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor: 'rgba(42,42,42,1)',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:52,
        color: '#2a2a2a',
        textShadowColor: '#698790',
        textShadowOffset:{width:2,height:-1},
        textShadowRadius: 3,
        textAlign:'center',
    },
    btnNormal:{
        backgroundColor: '#1F89E0',
        padding:15,
        borderRadius:6,
        borderWidth: 1,
        borderColor: '#1F89E0',
        shadowColor:'#eee',
        shadowOffset:{width:2,height:2},
        shadowRadius:4,
        justifyContent: 'center',
    },
    btnPressed:{
        backgroundColor: '#fff',
        padding:15,
        borderRadius:6,
        borderWidth: 1,
        borderColor: '#252525',
        shadowColor:'#eee',
        shadowOffset:{width:2,height:2},
        shadowRadius:4,
        justifyContent: 'center',
    },
    txtNormal:{
        alignSelf:'stretch',
        fontSize:20,
        color: '#fff',
        textShadowColor:'#4a4a4a',
        textShadowOffset:{width:1,height:-1},
        textShadowRadius:2,
        textAlign:'center',
    },
    txtPressed:{
        fontSize:20,
        color: '#1F89E0',
        textShadowColor:'#eee',
        textShadowOffset:{width:1,height:-1},
        textShadowRadius:2,
        textAlign:'center',
    },
});