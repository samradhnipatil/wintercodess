import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from '../config';
import As from './AuthServices';
const userArr = [];
export default class Infinity extends React.Component {


    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dbRef = firebase.firestore().collection('BookingDet');
        this.dbRefLoc = firebase.firestore().collection('Location');
        this.dbRefUID = firebase.firestore().collection('Users');
    }

    state = {
        dur: this.props.navigation.state.params.p1,
        time: this.props.navigation.state.params.p2 + ": " + this.props.navigation.state.params.p3 + "  " + this.props.navigation.state.params.p4,
        vehi: this.props.navigation.state.params.p5,
        pricebike: this.props.navigation.state.params.PR1,
        pricecar: this.props.navigation.state.params.PR2,
        LocationNo: this.props.navigation.state.params.L1,
        barc:'',
        UID: '',
        slot: '',
        amount: '',
        slot1: '',
        slot2: '',
        slot3: '',
        slot4: '',
        slot5: '',
        slot6: '',
        slot7: '',
        slot8: '',
        slot9: '',
        slot10: '',
        colo1: '',
        colo2: '',
        colo3: '',
        colo4: '',
        colo5: '',
        colo6: '',
        colo7: '',
        colo8: '',
        colo9: '',
        colo10: '',
    };

    Slot1 = () => {
        this.setState({
            slot: '1',
        });
    }
    Slot2 = () => {
        this.setState({
            slot: '2',
        });
    }
    Slot3 = () => {
        this.setState({
            slot: '3',
        });
    }
    Slot4 = () => {
        this.setState({
            slot: '4',
        });
    }
    Slot5 = () => {
        this.setState({
            slot: '5',
        });
    }
    Slot6 = () => {
        this.setState({
            slot: '6',
        });
    }
    Slot7 = () => {
        this.setState({
            slot: '7',
        });
    }
    Slot8 = () => {
        this.setState({
            slot: '8',
        });
    }
    Slot9 = () => {
        this.setState({
            slot: '9',
        });
    }
    Slot10 = () => {
        this.setState({
            slot: '10',
        });
    }


    handleSubmit = () => {
        console.log('Item saved successfully');
        if (this.state.vehi === 'Car') {
            this.state.amount = parseInt(this.state.pricecar) * parseInt(this.state.dur);
        }
        else {
            this.state.amount = parseInt(this.state.pricebike) * parseInt(this.state.dur);
        }

        this.dbRef.add({
            Duration: this.state.dur,
            Start: this.state.time,
            TypeOFVehi: this.state.vehi,
            SlotNo: this.state.slot,
            Paid: this.state.amount,
            LocationNo: this.state.LocationNo,
            UID: As.Current().uid,
        }).then((res) => {
             console.log(res.id);
             this.setState({
                 barc:res.id,
             });
            this.dbRefLoc.doc("1").update({
                OccupiedSlots: firebase.firestore.FieldValue.arrayUnion(parseInt(this.state.slot)),
            }).then(() => {
                console.log('Item saved successfully');
                this.props.navigation.navigate('pay', { p1: this.state.dur, p2: this.state.time, p3: this.state.vehi, p4: this.state.slot, p5: this.state.amount, p6: this.state.LocationNo ,p7:this.state.barc});

            }).catch((err) => {
                console.error("Error found: ", err);
            });
        }).catch((err) => {
                console.error("Error found: ", err);
            });
    };

    componentDidMount() {
        this.dbRefLoc.doc("1").get().then(res=> {
            console.log(res.data());
            const userArr = res.data().OccupiedSlots;
            for (i = 0; i < userArr.length; i++) {
                if (userArr[i]=== 1) {
                    this.setState({
                        slot1: true,
                        colo1: '#000000',
                    });
                }
                else if (userArr[i]=== 2) {
                    this.setState({
                        slot2: true,
                        colo2: '#000000',
                    });
                }
                else if (userArr[i] === 3 ) {
                    this.setState({
                        slot3: true,
                        colo3: '#000000',
                    });
                }
                else if (userArr[i] === 4) {
                    this.setState({
                        slot4: true,
                        colo4: '#000000',
                    });
                }
                else if (userArr[i] === 5) {
                    this.setState({
                        slot5: true,
                        colo5: '#000000',
                    });
                }
                else if (userArr[i] === 6) {
                    this.setState({
                        slot6: true,
                        colo6: '#000000',
                    });
                }
                else if (userArr[i] === 7) {
                    this.setState({
                        slot7: true,
                        colo7: '#000000',
                    });
                }
                else if (userArr[i] === 8) {
                    this.setState({
                        slot8: true,
                        colo8: '#000000',
                    });
                }
                else if (userArr[i] === 9) {
                    this.setState({
                        slot9: true,
                        colo9: '#000000',
                    });
                }
                else if (userArr[i] === 10) {
                    this.setState({
                        slot10: true,
                        colo10: '#000000',
                    });
                }
            }
        }).catch((err) => {
            console.error("Error found: ", err);
        });
    }

    getCollection = (querySnapshot) => {
        // const userArr = [];
        querySnapshot.forEach((res) => {
            const { SlotNo, LocationNo } = res.data();
            userArr.push({
                SlotNo, LocationNo
            });
        });
        for (i = 0; i < userArr.length; i++) {
            if (userArr[i].SlotNo === '1' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot1: true,
                    colo1: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '2' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot2: true,
                    colo2: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '3' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot3: true,
                    colo3: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '4' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot4: true,
                    colo4: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '5' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot5: true,
                    colo5: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '6' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot6: true,
                    colo6: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '7' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot7: true,
                    colo7: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '8' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot8: true,
                    colo8: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '9' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot9: true,
                    colo9: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '10' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot10: true,
                    colo10: '#000000',
                });
            }
        }
    }

    render() {

        const buttonStyle1 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo1,
            padding: "22px",
            paddingTop: "10px",
            fontFamily: "calibri",
            fontSize: "30px",
            marginRight: "80px",
            height: "60px",
            width: "160px",
            borderWidth: 6,
            borderColor: "#FFFFFF"
        }
        const buttonStyle2 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo2,
            padding: "22px",
            paddingTop: "10px",
            fontFamily: "calibri",
            fontSize: "30px",
            marginRight: "80px",
            height: "60px",
            width: "160px",
            borderWidth: 6,
            borderColor: "#FFFFFF"
        }
        const buttonStyle3 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo3,
            padding: "22px",
            paddingTop: "10px",
            fontFamily: "calibri",
            fontSize: "30px",
            marginRight: "80px",
            height: "60px",
            width: "160px",
            borderWidth: 6,
            borderColor: "#FFFFFF"
        }
        const buttonStyle4 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo4,
            padding: "22px",
            paddingTop: "10px",
            fontFamily: "calibri",
            fontSize: "30px",
            marginRight: "80px",
            height: "60px",
            width: "160px",
            borderWidth: 6,
            borderColor: "#FFFFFF"
        }
        const buttonStyle5 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo5,
            padding: "22px",
            paddingTop: "10px",
            fontFamily: "calibri",
            fontSize: "30px",
            marginRight: "80px",
            height: "60px",
            width: "160px",
            borderWidth: 6,
            borderColor: "#FFFFFF"
        }
        const buttonStyle6 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo6,
            padding: "22px",
            paddingTop: "10px",
            fontFamily: "calibri",
            fontSize: "30px",
            marginRight: "80px",
            height: "60px",
            width: "160px",
            borderWidth: 6,
            borderColor: "#FFFFFF"
        }
        const buttonStyle7 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo7,
            padding: "22px",
            paddingTop: "10px",
            fontFamily: "calibri",
            fontSize: "30px",
            marginRight: "80px",
            height: "60px",
            width: "160px",
            borderWidth: 6,
            borderColor: "#FFFFFF"
        }
        const buttonStyle8 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo8,
            padding: "22px",
            paddingTop: "10px",
            fontFamily: "calibri",
            fontSize: "30px",
            marginRight: "80px",
            height: "60px",
            width: "160px",
            borderWidth: 6,
            borderColor: "#FFFFFF"
        }
        const buttonStyle9 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo9,
            padding: "22px",
            paddingTop: "10px",
            fontFamily: "calibri",
            fontSize: "30px",
            marginRight: "80px",
            height: "60px",
            width: "160px",
            borderWidth: 6,
            borderColor: "#FFFFFF"
        }
        const buttonStyleten = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo10,
            padding: "17px",
            paddingTop: "10px",
            paddingRight: "18px",
            paddingLeft: "18px",
            fontFamily: "calibri",
            fontSize: "30px",
            marginRight: "80px",
            height: "60px",
            width: "160px",
            borderWidth: 6,
            borderColor: "#FFFFFF"
        }
        const buttonStyleentry = {
            color: "#008484",
            backgroundColor: "#FFFFFF",
            padding: "17px",
            paddingTop: "10px",
            paddingRight: "18px",
            paddingLeft: "18px",
            fontFamily: "calibri",
            fontSize: "25px",
            marginRight: "80px",
            height: "60px",
            width: "200px"
        }
        const buttonStyleGo = {
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
            width: "150px",
            borderWidth: 6,
            borderColor: "#FFFFFF",
        }
        const selectText = {
            color: "#FFFFFF",
            fontFamily: "calibri",
            justifyContent: 'center',
            fontSize: "40px",
            marginRight: 65
        }
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Text style={selectText}>Select Your Slot</Text>
                </View>
                <View style={styles.rowContainer}>
                    <button style={buttonStyle1} disabled={this.state.slot1} onClick={this.Slot1}>Slot 1</button>
                    <button style={buttonStyle2} disabled={this.state.slot2} onClick={this.Slot2}>Slot 2</button>
                </View>
                {/* disabled="true" */}
                <View style={styles.rowContainer}>
                    <button style={buttonStyle3} disabled={this.state.slot3} onClick={this.Slot3}>Slot 3</button>
                    <button style={buttonStyle4} disabled={this.state.slot4} onClick={this.Slot4}>Slot 4</button>
                </View>
                <View style={styles.rowContainer}>
                    <button style={buttonStyle5} disabled={this.state.slot5} onClick={this.Slot5}>Slot 5</button>
                    <button style={buttonStyle6} disabled={this.state.Slot6} onClick={this.Slot6}>Slot 6</button>
                </View>
                <View style={styles.rowContainer}>
                    <button style={buttonStyle7} disabled={this.state.slot7} onClick={this.Slot7}>Slot 7</button>
                    <button style={buttonStyle8} disabled={this.state.slot8} onClick={this.Slot8}>Slot 8</button>
                </View>
                <View style={styles.rowContainer}>
                    <button style={buttonStyle9} disabled={this.state.slot9} onClick={this.Slot9}>Slot 9</button>
                    <button style={buttonStyleten} disabled={this.state.slot10} onClick={this.Slot10} >Slot 10</button>
                </View>
                <View style={styles.rowContainer}>
                    <button style={buttonStyleentry} disabled="true">Entry Gate</button>
                </View>
                <Text style={selectText} >
                    Selected Slot:{this.state.slot}
                </Text>
                <View style={styles.rowContainer}>
                    <button style={buttonStyleGo} onClick={this.handleSubmit}>GO</button>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008484',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rowContainer: {
        // margin: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2px'
    },
    buttonText: {
        color: "#008484",
        backgroundColor: "#FFFFFF",
        fontFamily: "calibri",
        fontSize: "30px",
        borderColor: "#FFFFFF"
    }

});
