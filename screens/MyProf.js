// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import ImagePicker from "react-native-image-picker";
import firebase from '../config';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.buttonLogOut = this.buttonLogOut.bind(this);
        this.dbRefBook = firebase.firestore().collection('Users');
    }
    state = {
        Email:this.props.navigation.state.params.n2,
        UserName:'',
        Contact:'',
    }
    componentDidMount() {
        this.unsubscribe = this.dbRefBook.onSnapshot(this.getCollection);
    }

    getCollection = (querySnapshot) => {
        const userArrslot = [];
        querySnapshot.forEach((res) => {
            const { Email,UserName,contact } = res.data();
            userArrslot.push({
                Email, UserName, contact
            });
        });
        for (i = 0; i < userArrslot.length; i++) {
            if (userArrslot[i].Email === this.state.Email) {
                this.setState({
                    UserName: userArrslot[i].UserName,
                    Contact: userArrslot[i].contact,
                });
            }
        }
    }
    buttonLogOut =()=> {
        As.logOut()
            .then(() => {
                console.log('Sign-out successful');
                this.props.navigation.navigate('loginpg');
            }).catch((error) => {
                console.log(error);
            });
    }
    buttonforgot() {
        console.log('called');
        this.props.navigation.navigate('forgotpg');
    }
    render() {
        const { photo } = this.state;
        this.componentDidMount();
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>P-Indicator</Text>
                <Text style={styles.profile}>My Profile</Text>
                <Text style={styles.Text}>Username:{this.state.UserName}</Text>
                <Text style={styles.Text}>E-mail Id:{this.state.Email}</Text>
                <Text style={styles.Text}>Contact No:{this.state.Contact}</Text>
                <TouchableOpacity>
                    <Text style={styles.password} onClick={this.buttonforgot}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutBtn}>
                    <Text style={styles.logout} onClick={this.buttonLogOut}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e1e1e1",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        fontFamily: "calibri",
        color: "#008484",
        marginBottom: 40
    },
    profile: {
        fontWeight: "bold",
        fontSize: 30,
        fontFamily: "calibri",
        color: "#001515",
        marginBottom: 20
    },
    Text: {
        height: 20,
        fontFamily: "calibri",
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "#001515",
        // textAlign:'center',
    },
    password: {
        height: 20,
        fontFamily: "calibri",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "#001515"
    },
    logoutBtn: {
        width: "20%",
        backgroundColor: "#008484",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 30
    },
    logout: {
        fontFamily: "calibri",
        fontWeight: "bold",
        fontSize: 20,
        fontWeight: "bold",
        color: "#001515"
    }
});