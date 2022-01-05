import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthServices from './AuthServices';
import As from './AuthServices';

export default class homepage extends React.Component {

    state = {
        em: this.props.navigation.state.params.n1,
    }
    
    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
        this.buttonPressmyprof = this.buttonPressmyprof.bind(this);
        this.buttonPressabout = this.buttonPressabout.bind(this);
        this.buttonLogout = this.buttonLogout.bind(this);
        this.buttonbooking = this.buttonbooking.bind(this);
    }

    buttonPress() {
        this.props.navigation.navigate('desti',{n2:this.state.em});
    }
    buttonPressmyprof() {
        console.log('called');
        this.props.navigation.navigate('myprof',{n2:this.state.em});
    }
    buttonPressabout() {
        console.log('called');
        this.props.navigation.navigate('Aboutu');
    }
    buttonLogout() {
        As.logOut()
            .then(() => {
                console.log('Sign-out successful');
                this.props.navigation.navigate('loginpg');
            }).catch((error) => {
                console.log(error);
            });
    }
    buttonbooking() {
        console.log('called');
        this.props.navigation.navigate('booki');
    }

    render() {

        const buttonStylesubmit = {
            color: "#FFFFFF",
            backgroundColor: "#008484",
            paddingBottom: "17px",
            paddingTop: "3px",
            fontFamily: "calibri",
            fontSize: "25px",
            height: "60px",
            width: 450,
            borderWidth: 6,
            borderColor: "#FFFFFF",
        }

        return (
            <View style={styles.container}>
                <View style={styles.RectangleShapeView}>
                    <Text style={styles.textHeading}>Home</Text>
                </View>
                <View>
                    <View><button style={buttonStylesubmit} onClick={this.buttonPress}>Book My Slot</button>
                    </View><br></br>
                    <View>
                        <button style={buttonStylesubmit} onClick={this.buttonPressmyprof}>My Profile</button>
                    </View><br></br>
                    <View>
                        <button style={buttonStylesubmit} onClick={this.buttonPressabout}>About Us</button>
                    </View><br></br>
                    <View>
                        <button style={buttonStylesubmit} onClick={this.buttonbooking}>My Booking</button>
                    </View><br></br>
                    <br></br><br></br><br></br><br></br><br></br>
                </View>
                <View style={styles.RectangleShapedown}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    RectangleShapeView: {

        // marginTop: 25,
        width: "100%",
        height: 120,
        backgroundColor: '#008484',
        marginBottom: 5,
        textAlign: 'center'
    },
    RectangleShapedown: {

        width: "100%",
        height: 80,
        marginBottom:0,
        backgroundColor: '#008484',
        textAlign: 'center',
    },
    textHeading: {
        color: "#FFFFFF",
        fontSize: "40px",
        fontFamily: "calibri",
        paddingTop: 60
    },
});