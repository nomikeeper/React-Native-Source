import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    BackAndroid,
    TouchableHighlight,
    ListView,
    ScrollView,
} from 'react-native';

//necessary components
import LoggedInHeader from '../components/loggedInHeader';
import Footer from '../components/footer';

class LoggedInIndex extends Component{
    constructor(props){
            super(props);
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.state={
                pressed: false,
                dataSource: ds.cloneWithRows(['Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Assignment 5', 'Assignment 6','Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Assignment 5', 'Assignment 6']),
        }
    }
    _onHideUnderlay(){
                this.setState({pressed:false});
    }
    _onShowUnderlay(){
                this.setState({pressed:true});
    }
    navigate(assignmentID){
            this.props.navigator.push({
                id: 'assignment',
                date: {
                    id: assignmentID,
                    point: 15
                }
            });
    }
    
    setupDate(currentDay){
            switch(currentDay.weekdaysOf){
                case 7:
                    return this.setup(7-1);
                case 6:
                    return this.setup(6-1);
                case 5:
                    return this.setup(5-1);
                case 4:
                    return this.setup(4-1);
                case 3:
                    return this.setup(3-1);
                case 2:
                    return this.setup(2-1);
                case 1:
                    return this.setup(0);
                default:
                    throw 'Something went wrong with you date picker';
            }
    }
    setup(day)
    {
        if(day != 0){
            var startDate = new Date();
            var DisplayDate= {
                year: startDate.getFullYear(),
                month: startDate.getMonth()+1,
                day: startDate.getDate() - day
            }
            var days = [];
            var a = 0;
            while(5- a > 0){
                days[a] = a == 0 ? DisplayDate.day : ++DisplayDate.day;
                a++;
            }
            var result = {
                displayDate: DisplayDate,
                dayS: days
            }
            return result;
        }
        
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
        var date = new Date();
        var currentDay = {
            weekdaysOf: date.getDay(),
            dayOfTheMonth: date.getDate()
        }
        var result = this.setupDate(currentDay); 
        return(
            <View style={styles.container}>
                <LoggedInHeader />
                <View style={styles.contentContainer}>
                    <ScrollView>
                        <ListView 
                            dataSource={this.state.dataSource}
                            renderRow={ (rowdata) =>    <TouchableHighlight
                                                                underlayColor='rgba(225,225,225,0.5)'
                                                                style={this.state.pressed ? styles.btnPressed : styles.btnNormal}
                                                                onHideUnderlay={this._onHideUnderlay.bind(this)}
                                                                onShowUnderlay={this._onShowUnderlay.bind(this)}
                                                                onPress={this.navigate.bind(this)}>
                                                                <Text style={this.state.pressed ? styles.textPressed : styles.textNormal}> {rowdata}  </Text>
                                                        </TouchableHighlight>}
                        />
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
     btnNormal:{
        backgroundColor: '#2a2a2a',
        justifyContent:'center',
        paddingVertical:30,
     },
     btnPressed:{
        backgroundColor:'#eee',
        justifyContent:'center',
        paddingVertical:30,
    },
     textNormal:{
        color:'#fff',
        fontSize:25,
        textAlign:'center',
     },
     textPressed:{
        color:'#2a2a2a',
        fontSize:25,
        textAlign:'center',
    },
});

export default LoggedInIndex;