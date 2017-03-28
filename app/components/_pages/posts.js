import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    ListView,
    Image,
} from 'react-native';
//necessary components
import LoggedInHeader from '../components/loggedInHeader';
import Footer from '../components/footer';

class Posts extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <LoggedInHeader />
                <View style={styles.contentContainer}>
                    <ScrollView style={{paddingHorizontal:40}}>
                        <View style={styles.postBox}>
                            <View style={styles.postHeader}> 
                                <View style={styles.imageBox}> 
                                </View>
                                <View style={styles.userInfo}>
                                    <Text style={styles.UIStyle}>Name</Text>
                                    <Text style={styles.UIStyle}>Date</Text>
                                </View>
                            </View>
                            <Text style={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Proin sed ante quis neque convallis tempor. 
                                        Fusce sit amet ante dolor. Vivamus et enim iaculis, finibus odio ac, faucibus leo. Ut ut dolor sapien.
                                        Maecenas commodo, lorem et rhoncus faucibus, metus leo dapibus orci, eu venenatis mi erat eu ipsum.
                            </Text>
                        </View>
                        <View style={styles.postBox}>
                            <View style={styles.postHeader}> 
                                <View style={styles.imageBox}> 
                                </View>
                                <View style={styles.userInfo}>
                                    <Text style={styles.UIStyle}>Name</Text>
                                    <Text style={styles.UIStyle}>Date</Text>
                                </View>
                            </View>
                            <Text style={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Proin sed ante quis neque convallis tempor. 
                                        Fusce sit amet ante dolor. Vivamus et enim iaculis, finibus odio ac, faucibus leo. Ut ut dolor sapien.
                            </Text>
                        </View>
                        <View style={styles.postBox}>
                            <View style={styles.postHeader}> 
                                <View style={styles.imageBox}> 
                                </View>
                                <View style={styles.userInfo}>
                                    <Text style={styles.UIStyle}>Name</Text>
                                    <Text style={styles.UIStyle}>Date</Text>
                                </View>
                            </View>
                            <Text style={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Proin sed ante quis neque convallis tempor. 
                            </Text>
                        </View>
                        <View style={styles.postBox}>
                            <View style={styles.postHeader}> 
                                <View style={styles.imageBox}> 
                                </View>
                                <View style={styles.userInfo}>
                                    <Text style={styles.UIStyle}>Name</Text>
                                    <Text style={styles.UIStyle}>Date</Text>
                                </View>
                            </View>
                            <Text style={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Proin sed ante quis neque convallis tempor. 
                                        Fusce sit amet ante dolor. Vivamus et enim iaculis, finibus odio ac, faucibus leo. Ut ut dolor sapien.
                                        Maecenas commodo, lorem et rhoncus faucibus, metus leo dapibus orci, eu venenatis mi erat eu ipsum.
                                        Fusce sit amet ante dolor. Vivamus et enim iaculis, finibus odio ac, faucibus leo. Ut ut dolor sapien.
                                        Maecenas commodo, lorem et rhoncus faucibus, metus leo dapibus orci, eu venenatis mi erat eu ipsum.
                            </Text>
                        </View>
                    </ScrollView>
                </View>
                <Footer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'rgba(42,42,42,0.9)',
    },
    contentContainer:{
        flex:10,
        backgroundColor:'#2a2a2a',
        justifyContent:'center',
    },
    postBox:{
        marginVertical:30,
        backgroundColor:'rgba(255,255,255,0.8)',
        borderRadius:4,
    },
    imageBox:{
        width:65,
        height:65,
        borderWidth:1,
        borderColor:'#1F89E0',
    },
    userInfo:{
        flex:1,
        flexDirection:'column',
        paddingLeft:25
    },
    UIStyle:{
        flex:1,
        fontSize:16
    },
    postHeader:{
        margin:30,
        marginBottom:0,
        paddingBottom:15,
        borderBottomWidth:1,
        borderColor:'#eee',
        flexDirection:'row',
        alignItems:'center'
    },
    postText:{
        fontSize:12,
        lineHeight:22,
        color:'#2a2a2a',
        padding:30,
        paddingTop:15
    }
});

export default Posts;