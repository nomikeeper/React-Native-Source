import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class LoggedInHeader extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={{color:'#fff',fontSize:30}}> Logged In Header is here.</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1F89E0',
        justifyContent:'center',
        alignItems:'center',
    },
});

export default LoggedInHeader;