import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from "../config";
import firestore from '@react-native-firebase/firestore';
import As from './AuthServices';

export default class registration extends React.Component {
    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
        this.dbRef = firebase.firestore().collection('Users');
    }
    state = {
        username: "",
        email: "",
        password: "",
        contact: "",
        UID: ','
    };

    buttonPress() {


        As.signUp(this.state.email, this.state.password)
            .then((userCredential) => {
                // Signed in
                console.log("successed!!");
                var user = userCredential.user;
                this.dbRef.doc(As.Current().uid).set({
                    UserName: this.state.username,
                    Email: this.state.email,
                    contact: this.state.contact,
                }).then(() => {
                    console.log('User addedd!!!!');
                    this.props.navigation.navigate('loginpg');
                }).catch((error) => {
                    console.log(error);
                    alert(error);
                });
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        console.log(this.state.username + " " + this.state.email + " " + this.state.password + " " + this.state.contact);
    }

    render() {

        const buttonStylesubmit = {
            color: "#FFFFFF",
            backgroundColor: "#008484",
            paddingBottom: "17px",
            paddingTop: "3px",
            paddingRight: "18px",
            paddingLeft: "18px",
            fontFamily: "calibri",
            fontSize: "35px",
            marginRight: "80px",
            height: "60px",
            width: "350px",
            borderWidth: 6,
            borderColor: "#FFFFFF",
            marginLeft: 55,
            marginBottom: 40,
            marginTop: 20
        }

        const register = {
            fontFamily: "calibri",
            fontWeight: "bold",
            fontSize: 20,
            color: "#008484"
        }

        return (
            <View style={styles.container}>
                <Text style={styles.logo}>P-Indicator</Text>
                {/* <Text style={styles.EText}>Username</Text> */}
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your username..."
                        placeholderTextColor="#808080"
                        onChangeText={text => this.setState({ username: text })} />
                </View>
                {/* <Text style={styles.EText}>E-mail Id</Text> */}
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your Email..."
                        placeholderTextColor="#808080"
                        name='email'
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                {/* <Text style={styles.EText}>Password</Text> */}
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your Password..."
                        placeholderTextColor="#808080"
                        name='password'
                        secureTextEntry
                        onChangeText={text => this.setState({ password: text })} />
                </View>
                {/* <Text style={styles.EText}>Contact No</Text> */}
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your Contact number..."
                        placeholderTextColor="#808080"
                        onChangeText={text => this.setState({ contact: text })} />
                </View>
                <View>
                    <button style={buttonStylesubmit} onClick={this.buttonPress}>Register</button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#008484",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        fontFamily: "calibri",
        color: "#ffffff",
        marginBottom: 40
    },
    inputView: {
        width: "50%",
        backgroundColor: "#ffffff",
        height: 40,
        marginBottom: 20,
        marginTop: 10,
        justifyContent: "center",
        padding: 10
    },
    EText: {
        height: 20,
        fontFamily: "calibri",
        fontSize: 26,
        marginRight: 600,
        fontStyle: "italic",
        color: "#e1e1e1",
        alignItems: 'center',
        padding: 10,
        marginLeft: 10,
        color: "#FFFFFF",
        marginBottom: 15
    },
    inputText: {
        height: 20,
        fontFamily: "calibri",
        fontSize: 16,
        //    fontStyle: "italic",
        color: "#000000"
    },
    registerBtn: {
        width: "20%",
        backgroundColor: "#e1e1e1",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 30
    }
});