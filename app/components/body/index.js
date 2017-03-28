import React,{Component} from 'react';
import {
    View,
    ScrollView,
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';

export default class IndexBody extends Component{
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={pressed: false,
            dataSource: ds.cloneWithRows(this.props.userList),
        }
}
    _onHideUnderlay(){
        this.setState({pressed:false});
    }
    _onShowUnderlay(){
        this.setState({pressed:true});
    }
    navigate(){
        this.props.navigator.push({
            id: 'loggedInIndex'
        });
    }
    render(){
        return(
            <View style={styles.screen}>
                {this.props.userList != null ? 
                                <ListView   dataSource={this.state.dataSource}
                                renderRow={(rowdata) => 
                                    <TouchableHighlight
                                        underlayColor='rgba(0,0,0,0)'
                                        style={this.state.pressed ? styles.btnPressed : styles.btnNormal}
                                        onHideUnderlay={this._onHideUnderlay.bind(this)}
                                        onShowUnderlay={this._onShowUnderlay.bind(this)}
                                        onPress={this.navigate.bind(this)}>
                                        <Text style={this.state.pressed ? styles.textPressed : styles.textNormal}>{this.props.userList ? rowdata : "No"}</Text>
                                    </TouchableHighlight>} /> : <Text> No!!! </Text>}
                    
            </View>
        );
    }
}
 const styles = StyleSheet.create({
     screen:{
        flex:85,
     },
     btnNormal:{
        backgroundColor: '#1F89E0',
        padding:25,
     },
     btnPressed:{
        backgroundColor:'#eee',
        padding:25,
     },
     textNormal:{
        color:'#fff',
        fontSize:25,
        textAlign:'center'
     },
     textPressed:{
        color:'#2a2a2a',
        fontSize:25,
        textAlign:'center'
    },

 });
