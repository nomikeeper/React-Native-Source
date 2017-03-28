import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class Footer extends Component{
    render(){
        return(
            <View style={styles.footer}>
                <Text style={{color:'#fff',fontSize:30}}>Here is the footer</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer:{
        flex:1,
        backgroundColor: '#1F89E0',
        justifyContent:'center',
        alignItems:'center',
    }
});

export default Footer;