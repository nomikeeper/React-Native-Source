import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import Header from '../components/header.js'; // Component/body/header View
import IndexBody from '../body/index.js'; // Component/header/index View


// Building index view by component by component.
export default class IndexPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <Header navigator = {this.props.navigator}/>
                <IndexBody navigator = {this.props.navigator} userList = {this.props.userList}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
});
