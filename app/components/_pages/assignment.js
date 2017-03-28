import React , {Component} from 'react';
import{Text,View,StyleSheet,ScrollView,TouchableHighlight,Alert} from 'react-native';
import LoggedInHeader from '../components/loggedInHeader';
import Footer from '../components/footer';


export default class Assignment extends Component{
    constructor(props){
        super(props);
        this.state={pressed: false}
    }
    _onHideUnderlay(){
        this.setState({pressed:false});
    }
    _onShowUnderlay(){
        this.setState({pressed:true});
    }
    doSomething(text){
        this.props.navigator.push({
            id: 'posts'
        });
    }
    render(){
        return(
            <View style={styles.container}>  
                <LoggedInHeader />
                <View style={styles.contentContainer}>
                    <ScrollView style={{paddingHorizontal:20,paddingTop:30,}}>
                        <View style={styles.assignment}> 
                            <TouchableHighlight underlayColor='rgba(255,255,255,1)' style={styles.descBox} onPress={()=> this.doSomething(1)}>
                                <Text style={styles.title}>Assignment 1{"\n"}
                                    <Text style={styles.paragraph}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ante quis neque convallis tempor. 
                                        Fusce sit amet ante dolor. Vivamus et enim iaculis, finibus odio ac, faucibus leo. Ut ut dolor sapien.
                                        Maecenas commodo, lorem et rhoncus faucibus, metus leo dapibus orci, eu venenatis mi erat eu ipsum. !!!{this.props.data.point}!!!</Text>
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.assignment}> 
                            <TouchableHighlight underlayColor='rgba(255,255,255,1)' style={styles.descBox} onPress={()=> this.doSomething(2)}>
                                <Text style={styles.title}>Assignment 2{"\n"}
                                    <Text style={styles.paragraph}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed ante quis neque convallis tempor. 
                                        Fusce sit amet ante dolor. Vivamus et enim iaculis, finibus odio ac, faucibus leo. Ut ut dolor sapien.
                                        Maecenas commodo, lorem et rhoncus faucibus, metus leo dapibus orci, eu venenatis mi erat eu ipsum.</Text>
                                </Text>
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight
                            underlayColor='rgba(0,0,0,0)'
                            style={this.state.pressed ? styles.btnPressed : styles.btnNormal}
                            onHideUnderlay={this._onHideUnderlay.bind(this)}
                            onShowUnderlay={this._onShowUnderlay.bind(this)}
                            onPress={()=> this.doSomething("Self-Judge")}>
                            <Text style={this.state.pressed ? styles.selfJudgePressed : styles.selfJudgeNormal}>Self-Judge</Text>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
                <Footer/>
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
        justifyContent: 'center',
    },
    assignment:{
        marginBottom:50,
        paddingBottom:50,
        borderBottomWidth:2,
        borderBottomColor:'#fff',
        borderStyle:'solid',
    },
    descBox:{
        padding:30,
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:10,
        backgroundColor: 'rgba(255,255,255,0.85)',
    },
    title:{
        fontSize:35,
        color:'#2a2a2a',
    },
    paragraph:{
        color:'#2a2a2a',
        fontSize: 15,
        lineHeight:30,
    },
    btnNormal:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:80,
        backgroundColor:'#1F89E0',
        paddingVertical:20,
        borderRadius:15,
    },
    btnPressed:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:80,
        backgroundColor:'#fff',
        paddingVertical:20,
        borderRadius:15,
    },
    selfJudgeNormal:{
        textAlign:'center',
        fontSize: 20,
        color:"#fff",
    },
    selfJudgePressed:{
        textAlign:'center',
        fontSize: 20,
        color:'#2a2a2a',
    },
});