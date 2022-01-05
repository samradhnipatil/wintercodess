import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import RadioForm from 'react-native-simple-radio-button';
import firebase from '../config';

var TypeOfVehi = [
    { label: "  Car                         ", value: "Car" },
    { label: "  Bike", value: "Bike" },
];
 

export default class bookingDetails extends React.Component {

    constructor(props) {
        super(props);
        this.dataSubmit = this.dataSubmit.bind(this);
        this.dbRef = firebase.firestore().collection('BookingDet');
    }

    state = { 
        priceb: this.props.navigation.state.params.pr1,
        pricec: this.props.navigation.state.params.pr2,
        LocNo: this.props.navigation.state.params.l1,
        timeDur: '',
        timehr:'',
        timemin:'',
        timeap:'',
        vehitype:'',
        endtime:'',
        loc:'',
    }

    EndTime=(item1,item2,item3,item4)=>{
        if ((item1 === 1 && item2 === 11 && item4 == 'PM') || (item1 === 2 && item2 === 10 && item4 === 'PM') || (item1 === 3 && item2 === 9 && item4 === 'PM'))
        {
            this.setState({ endtime: '12 : ' + item3 + "AM" })
        }
        else if ((item1 === 1 && item2 === 11 && item4 === 'AM') || (item1 === 2 && item2 === 10 && item4 === 'AM') || (item1 === 3 && item2 === 9 && item4 === 'AM')) {
            this.setState({ endtime: '12 : ' + item3 + "PM" })
        }
        else if ((item1 === 2 && item2 === 11 && item4 === 'PM') || (item1 === 3 && item2 === 10 && item4 === 'PM') || (item1 === 1 && item2 === 12 && item4 === 'PM')) {
            this.setState({ endtime: '01 : ' + item3 + "AM" })
        }
        else if ((item1 === 2 && item2 === 11 && item4 === 'AM') || (item1 === 3 && item2 === 10 && item4 === 'AM') || (item1 === 1 && item2 === 12 && item4 === 'AM')) {
            this.setState({ endtime: '01 : ' + item3 + "PM" })
        }
        else if ((item1 === 3 && item2 === 11 && item4 === 'PM') || (item1 === 2 && item2 === 12 && item4 === 'PM'))
        {
            this.setState({ endtime: '02 : ' + item3 + "AM" })
        }
        else if ((item1 === 3 && item2 === 11 && item4 === 'AM') || (item1 === 2 && item2 === 12 && item4 === 'AM')) {
            this.setState({ endtime: '02 : ' + item3 + "PM" })
        }
        else if ((item1 === 3 && item2 === 12 && item4 === 'PM')) {
            this.setState({ endtime: '03 : ' + item3 + "AM" })
        }
        else if ((item1 === 3 && item2 === 12 && item4 === 'AM')) {
            this.setState({ endtime: '03 : ' + item3 + "PM" })
        }
        else{
            this.setState({ endtime: (item1+ item2)+ ' : ' + item3 + " "+item4 })
        }
        
    }
    TimeDur = (td) => {
        this.setState({ timeDur: td })
    };
    Timehr = (th) => {
        this.setState({ timehr: th })
    };
    Timemin = (tm) => {
        this.setState({ timemin: tm })
    };
    Timeap = (tap) => {
        this.setState({ timeap: tap })
        this.EndTime(parseInt(this.state.timeDur), parseInt(this.state.timehr), this.state.timemin, tap)
        if (this.state.LocNo === 1)
        {
            this.setState({ loc:'InfiMaze' });
        }
        else if (this.state.LocNo === 2) {
            this.setState({ loc: 'pubpark' });
        }
        else if (this.state.LocNo === 3) {
            this.setState({ loc: 'PhoeMaze' });
        }
        else{
            alert("Please Select your destination!!")
        }

    };
    VehiType = (VT) => {
        this.setState({ vehitype: VT })
    }

    dataSubmit() {    
        this.props.navigation.navigate(this.state.loc, { p1: this.state.timeDur, p2: this.state.timehr, p3: this.state.timemin, p4: this.state.timeap, p5: this.state.value, PR1: this.state.priceb, PR2: this.state.pricec, L1: this.state.LocNo});
    }


    render() {
        
        const buttonStylesubmit = {
            color: "#FFFFFF",
            backgroundColor: "#008484",
            fontFamily: "calibri",
            fontSize: "35px",
            height: "60px",
            width: 450,
            borderWidth: 6,
            borderColor: "#FFFFFF",
            marginBottom: 40,
            alignItems:'center',
            justifyContent: 'center'
        }


        return (
            <View style={styles.container}>
                <Text style={styles.textHeading}>Booking Details</Text>
                <View style={styles.RectangleShapeView}>
                    <br></br>
                    <Text style={styles.texttypevehi}>Type of Vehicle</Text>
                    <View>                        
                        <RadioForm style={styles.dropdown}
                            radio_props={TypeOfVehi}
                            initial={2}
                            onPress={(value) => { this.setState({ value: value }) }}
                            buttonSize={10}
                            buttonColor={"#008484"}
                            buttonOuterSize={20}
                            selectedButtonColor={"#008484"}
                            labelStyle={{ fontSize: "25px", fontFamily: "calibri", color: "#008484" }}
                            disable={true}
                            formHorizontal={true}
                        ></RadioForm>
                    </View><br></br>
                    <Text style={styles.texttypevehi}>Time Duration</Text>
                    <View >
                        <Picker style={styles.pickeratt} selectedValue={this.state.timeDur} onValueChange={this.TimeDur}>
                            <Picker.Item label="Select Time Duration" value="0"></Picker.Item>
                            <Picker.Item label="1 hour" value="1"></Picker.Item>
                            <Picker.Item label="2 Hours" value="2"></Picker.Item>
                            <Picker.Item label="3 Hours" value="3"></Picker.Item>
                        </Picker>
                    </View><br></br>
                    <Text style={styles.texttypevehi}>Starting Time</Text>
                    <View style={styles.rowalightime}>
                        <Picker style={styles.pickerhr} selectedValue={this.state.timehr} onValueChange={this.Timehr}>
                            <Picker.Item label="Hr" value="0"></Picker.Item>
                            <Picker.Item label="01" value="01"></Picker.Item>
                            <Picker.Item label="02" value="02"></Picker.Item>
                            <Picker.Item label="03" value="03"></Picker.Item>
                            <Picker.Item label="04" value="04"></Picker.Item>
                            <Picker.Item label="05" value="05"></Picker.Item>
                            <Picker.Item label="06" value="06"></Picker.Item>
                            <Picker.Item label="07" value="07"></Picker.Item>
                            <Picker.Item label="08" value="08"></Picker.Item>
                            <Picker.Item label="09" value="09"></Picker.Item>
                            <Picker.Item label="10" value="10"></Picker.Item>
                            <Picker.Item label="11" value="11"></Picker.Item>
                            <Picker.Item label="12" value="12"></Picker.Item>
                        </Picker>
                        <Picker style={styles.pickermin} selectedValue={this.state.timemin} onValueChange={this.Timemin}>
                            <Picker.Item label="Min" value="0"></Picker.Item>
                            <Picker.Item label="00" value="00"></Picker.Item>
                            <Picker.Item label="15" value="15"></Picker.Item>
                            <Picker.Item label="30" value="30"></Picker.Item>
                            <Picker.Item label="45" value="45"></Picker.Item>
                        </Picker>
                        <Picker style={styles.pickermin} selectedValue={this.state.timeap} onValueChange={this.Timeap}>
                            <Picker.Item label=" " value="0"></Picker.Item>
                            <Picker.Item label="AM" value="AM"></Picker.Item>
                            <Picker.Item label="PM" value="PM"></Picker.Item>
                        </Picker>
                    </View>                    
                    <Text style={styles.texttypevehi}>Ending Time</Text>
                    <View style={styles.rowalightime}>
                        {/* <Text style={styles.pickerend}>{(parseInt(this.state.timehr) + parseInt(this.state.timeDur)) + " : " + this.state.timemin + "  " + this.state.timeap}</Text> */}
                        <Text style={styles.pickerend}>{this.state.endtime}</Text>
                    </View>
                        <button style={buttonStylesubmit} onClick={this.dataSubmit}>Choose Your Slot</button>
                    {/* </View> */}
                </View>
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
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2px',
        // marginLeft: 80,
        // marginTop: 100,
        marginBottom: 70
    },
    buttoncontainer: {
        backgroundColor: "#1abc9c",
        paddingVertical: 10,
        justifyContent: 'center'
    },
    RectangleShapeView: {

        marginTop: 25,
        width: "100%",
        height: 600,
        backgroundColor: '#FFFFFF',
        marginBottom: 5,
        alignItems:'center',
    },
    texttypevehi: {
        color: "#008484",
        fontSize: "35px",
        fontFamily: "calibri",
        // paddingLeft: 80,
        paddingBottom: 10,
    },
    textTime: {
        color: "#008484",
        fontSize: "30px",
        fontFamily: "calibri",
        paddingLeft: 30,

        paddingBottom: 10
    },
    textHeading: {
        color: "#FFFFFF",
        fontSize: "40px",
        fontFamily: "calibri",
        textAlign:'center',
    },
    pickeratt: {
        color: '#008484',
        backgroundColor: "#FFFFFF",
        fontSize: "25px",
        fontFamily: "calibri",
        width: 450,
        // marginLeft: 80,
    },
    pickerhr: {
        color: '#008484',
        backgroundColor: "#FFFFFF",
        fontSize: "25px",
        fontFamily: "calibri",
        width: 130,
        // marginLeft: 80,
        height: 30
    },
    pickermin: {
        color: '#008484',
        backgroundColor: "#FFFFFF",
        fontSize: "25px",
        fontFamily: "calibri",
        width: 130,
        // marginLeft: 80,
        height: 30,
        // marginLeft: 20
    },
    pickerend: {
        color: '#008484',
        backgroundColor: "#FFFFFF",
        fontSize: "30px",
        fontFamily: "calibri",
        width: "165px",
        // marginLeft: 80,
        height: 30,
        // marginLeft: 120,
        borderColor: '#008484',
        border:3
    },
    pickerAMPM: {
        color: '#008484',
        backgroundColor: "#FFFFFF",
        fontSize: "25px",
        fontFamily: "calibri",
        width: 130,
        // marginLeft: 80,
        height: 30
    },
    dropdown: {
        color: '#008484',
        backgroundColor: "#FFFFFF",
        fontSize: "25px",
        fontFamily: "calibri",
        // marginLeft: 80,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    rowalightime: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: '2px',
    },
    buttontext: {
        textAlign: 'center',
        color: "#ecf0f1",
        fontSize: 20
    }

});