import React from 'react';
import {  StyleSheet, Text, View} from 'react-native';
import firebase from '../config';

export default class Destination extends React.Component {

    state = {
        Number:'',
        UName:'',
        mName: '',
        SlotEmpty:'',
        priceC:'',
        priceB:'',
        locNo:'',
        Ema: this.props.navigation.state.params.n2,
    }
    buttoninfinity1 = () => {
        this.setState({
            Number:'1',
            mName:'Infinity Mall,Malad',
            priceC: 50,
            priceB: 30,
            locNo: 1,
        });
    }
    buttonpublicPark2 = () => {
        this.setState({
            Number: '2',
            mName: 'public Park,Goregoan',
            priceC: 60,
            priceB: 40,
            locNo: 2,
        });
    }
    buttonPhoenix3 = () => {
        this.setState({
            Number: '3',
            mName: 'Phoenix Mall,Pune',
            priceC: 45,
            priceB: 25,
            locNo: 3,
        });
    }

    constructor(props) {
        super(props);
        this.buttoninfinity1 = this.buttoninfinity1.bind(this);
        this.buttonpublicPark2 = this.buttonpublicPark2.bind(this);
        this.buttonPhoenix3 = this.buttonPhoenix3.bind(this);
        this.GO = this.GO.bind(this);
        this.dbRefName = firebase.firestore().collection('Users');
        this.dbRef = firebase.firestore().collection('Location');
        this.dbRefBook = firebase.firestore().collection('BookingDet');
        this.dbRefLoc = firebase.firestore().collection('Location');

    }


    GO = () => {    
        if(this.state.Number==='')
        {
            alert("Please ,select Your Destination!!")
        }
        else{
            this.props.navigation.navigate('bookhere', { pr1: this.state.priceC, pr2: this.state.priceB, l1: this.state.locNo });
        }
        
    }

    
    render() {

        const buttonStylesubmit = {
            color: "#FFFFFF",
            backgroundColor: "#008484",
            paddingBottom: "10px",
            paddingRight: "18px",
            paddingLeft: "18px",
            fontFamily: "calibri",
            fontSize: "25px",
            // marginRight: "80px",
            height: "40px",
            width: 450,
            // marginLeft: 55,
            marginBottom: 20
        }
        const buttonsubmit = {
            color: "#FFFFFF",
            backgroundColor: "#008484",
            paddingBottom: "10px",
            paddingRight: "18px",
            paddingLeft: "18px",
            fontFamily: "calibri",
            fontSize: "30px",
            // marginRight: "80px",
            height: "40px",
            width: 450,
            marginBottom: 20,
            // marginLeft:155,
            alignItems: 'center',
        }
        const selectText = {
            color: "#008484",
            fontFamily: "calibri",
            justifyContent: 'center',
            fontSize: "25px",
            textAlign:'center'
            // marginRight: 65
        }
        return (
            <View style={styles.container}>
                <View style={styles.RectangleShapeView}>
                    <Text style={styles.textHeading}>Destination</Text><br></br>
                </View>
                    <View>
                        <br></br>
                        <button style={buttonStylesubmit} onClick={this.buttoninfinity1}>Infinity Mall,Malad</button>
                    <button style={buttonStylesubmit} onClick={this.buttonpublicPark2}>public Parking,Goregoan</button>
                        <button style={buttonStylesubmit} onClick={this.buttonPhoenix3}>Phoenix Mall,Pune</button>
                    </View><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <Text style={selectText} >
                        Selected Destination:{this.state.mName}
                    </Text><br></br>        
                    <View>
                        <button style={buttonsubmit} onClick={this.GO}>Next</button>
                </View><br></br>
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
        width: "100%",
        height: 120,
        backgroundColor: '#008484',
        marginBottom: 5,
        textAlign: 'center'
    },
    RectangleShapedown: {
        width: "100%",
        height: 80,
        marginBottom: 0,
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