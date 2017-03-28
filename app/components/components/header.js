import React,{Component} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert,
    Image,
} from 'react-native';

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {pressStatus: false,};
    }
    _onHideUnderlay(){
        this.setState({pressStatus: false});
    }
    _onShowUnderlay(){
        this.setState({pressStatus: true});
    }
    navigate(){
        this.props.navigator.push({
            id: 'addStudent'
        });
    }
    

    render(){
        return(
                <View style={styles.header}>
                    <Image 
                        style={styles.logo}
                        resizeMode = 'contain'
                        source={require('../../resource/images/logo.png')}
                    />
                    <TouchableHighlight
                        underlayColor='rgba(0,0,0,0)'
                        style={this.state.pressStatus ? styles.btnPressed : styles.btn}
                        onHideUnderlay={this._onHideUnderlay.bind(this)}
                        onShowUnderlay={this._onShowUnderlay.bind(this)}
                        onPress={ () => this.navigate() }
                    >
                        <Text style={this.state.pressStatus ? styles.textPressed : styles.textNormal}>Add</Text>
                    </TouchableHighlight>
                </View>
        );
    }
}
// react-native styling -------------------------

const styles = StyleSheet.create({
    header:{
        flex: 15,
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: '#2a2a2a',
    },
    logo:{
        margin:25,
        width:65,
        height:65,
    },
    headerText:{
        justifyContent:'center',
        color: '#eeeeee',
        textShadowColor: '#fff',
        textShadowOffset:{width: 1, height:-1},
        textShadowRadius: 3, 
    },
    btnPressed:{
        margin:20,
        justifyContent:'center',
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor: '#eee',
        borderRadius:80,
        padding:10,
    },
    btn:{
        margin:20,
        justifyContent:'center',
        borderWidth:1,
        borderColor: '#eee',
        borderRadius:80,
        padding:10,
    },
    textNormal:{
        textAlign:'center',
        fontSize:22,
        color:'#fff',
    },
    textPressed:{
        textAlign:'center',
        fontSize: 22,
        color:'#2a2a2a',
    },
});