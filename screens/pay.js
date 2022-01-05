https://www.npmjs.com/package/react-native-barcode-builder
https://github.com/wonsikin/react-native-barcode-builder/blob/master/Example/App.js
https://www.npmjs.com/package/react-native-qrcode-svg
45 Kanchan Singh13: 08
https://www.npmjs.com/package/react-native-qrcode-generator
45 Kanchan Singh13: 16
https://medium.com/@mushtaque87/qrcode-generator-for-react-native-391ae401e275

Resolves the Webview error

import * as React from 'react';
import { View, Button, Text, Animated, StyleSheet, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';
import firebase from '../config';

const util = require('util');
var userA;
// var user2;
// var user3;
// var user4;
// var user5;
// var user6;
// var user7;
function Home({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#008484" }}>
            <Text style={{ fontWeight: "bold", fontSize: 30, color: "#e1e1e1", marginBottom: 30 }}>P-Indicator Payment</Text>
            <Text style={{ fontSize: 20, color: "#e1e1e1" }}> Total Parking charges for each slot is </Text>
            <Text style={{ fontSize: 30, color: "#e1e1e1", fontWeight: "bold" }}>₹{userA}</Text>
            <Text></Text><Text></Text><Text></Text><Text></Text><Text></Text>
            <View>
                <TouchableHighlight
                    style={styles.Button}
                    underlayColor="white"
                    onPress={() => navigation.navigate('Razor Pay')}
                >
                    <Text style={styles.pay}>Pay Now</Text>
                </TouchableHighlight></View>
        </View>
    );
}

function Profile({ navigation }) {
    return <WebView source={{ uri: 'https://rzp.io/l/OqHNiG5lx3' }} />;
}

const forFade = ({ current, next }) => {
    const opacity = Animated.add(
        current.progress,
        next ? next.progress : 0
    ).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
    });

    return {
        leftButtonStyle: { opacity },
        rightButtonStyle: { opacity },
        titleStyle: { opacity },
        backgroundStyle: { opacity },
    };
};


const Stack = createStackNavigator();
export default class payment extends React.Component {

    state = {
        userAm: '',
        promiseIsResolved: false,
        Dur: this.props.navigation.state.params.p1,
        Time: this.props.navigation.state.params.p2,
        Vehi: this.props.navigation.state.params.p3,
        Slot: this.props.navigation.state.params.p4,
        LocNo: this.props.navigation.state.params.p6,
        Amo: this.props.navigation.state.params.p5,

    }

    render() {
        userA = this.state.Amo;
        user2 = this.state.Dur;
        user3 = this.state.Time;
        user4 = this.state.Vehi;
        user5 = this.state.Slot;
        user6 = this.state.LocNo;
        // user2 = this.state.Dur;
        return (
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        );
    }
}
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="P-Indicator Payment"
                component={Home}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#008484' },
                }}
            />
            <Stack.Screen
                name="Razor Pay"
                component={Profile}
                options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#008484' }, headerStyleInterpolator: forFade }}
            />
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({
    pay: {
        fontSize: 20,
        color: "#008484",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 25,
        fontWeight: "bold",
    },
    Button: {
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        width: "35%",
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 20,
        borderWidth: 6,
        borderColor: "#FFFFFF",
        color: '#008484',
    },
});