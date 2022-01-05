import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import As from './AuthServices';
import { auth, provider } from '../config';
import firebase from "../config";

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
        this.buttonforgot = this.buttonforgot.bind(this);
        this.buttongoogle = this.buttongoogle.bind(this);
        this.buttonLogin = this.buttonLogin.bind(this);
        this.dbRefBook = firebase.firestore().collection('Users');
    }
    state = {
        email: "",
        password: "",
        Name:'',
    }    

    buttonLogin() {
        As.signIn(this.state.email, this.state.password)
            .then((userCredential) => {
                // Signed in
                this.props.navigation.navigate('homepg',{ n1: this.state.email});
                var user = userCredential.user;
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    buttongoogle() {
        auth.signInWithPopup(provider);
        this.props.navigation.navigate('homepg');
    }

    buttonClick() {
        console.log('called');
        this.props.navigation.navigate('register');
    }

    buttonforgot() {
        console.log('called');
        this.props.navigation.navigate('forgotpg');
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
            marginBottom: 40
        }

        const loginText = {
            fontFamily: "calibri",
            fontSize: 18,
            backgroundColor: "#FFFFFF",
            borderColor: "#FFFFFF",
            color: "#008484"
        }

        return (
            <View style={styles.container}>
                <Text style={styles.logo}>P-Indicator</Text>

                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#808080"
                        placeholderBorderColor="#ffffff"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#808080"
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })} />
                </View>
                <TouchableOpacity
                    onPress={this.buttonforgot}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                >
                    <Text style={styles.buttonText} onClick={this.buttonLogin}>login</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={this.buttongoogle}
                >
                    <Text style={styles.buttonText}>Sign in With Google</Text>
                </TouchableHighlight>

                <Text style={styles.account}>Don't have an account?</Text>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={this.buttonClick}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableHighlight>
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
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center',
        color: '#008484',
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        width: "25%",
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        borderWidth: 6,
        borderColor: "#FFFFFF",
        color: '#008484',
    },
    inputView: {
        width: "50%",
        backgroundColor: "#FFFFFF",
        height: 40,
        marginBottom: 20,
        //    borderColor: "#000000",
        padding: 10
    },
    inputText: {
        height: 20,
        fontFamily: "calibri",
        fontSize: 16,
        color: "#000000",
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        padding: 10,
    },
    EText: {
        height: 20,
        fontFamily: "calibri",
        fontSize: 26,
        marginRight: 600,
        fontStyle: "italic",
        color: "#e1e1e1",
        color: "#FFFFFF"
    },
    forgot: {
        marginLeft: 600,
        color: "#e1e1e1",
        fontFamily: "calibri",
        fontSize: 14,
        marginBottom: 20
    },
    account: {
        color: "#e1e1e1",
        fontFamily: "calibri",
        fontStyle: "italic",
        fontSize: 14,
        marginTop: 30
    },
    loginBtn: {
        width: "20%",
        backgroundColor: "#e1e1e1",
        borderRadius: 20,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 30,
        color: "#008484"
    },
    signUpBtn: {
        width: "20%",
        backgroundColor: "#e1e1e1",
        borderRadius: 25,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 20,
        color: "#008484"
    }
});