import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import barcode from './screens/barcode';

import login from './screens/login';
import homepage from './screens/homepage';
import Bookings from './screens/Bookings';
// import barcode from './screens/barcode';
import publicPark from './screens/publicPark';
import Phoenix from './screens/Phoenix';
import Infinity from "./screens/Infinity";
import forgotpass from './screens/forgotpass';
import Destination from './screens/Destination';
import registration from "./screens/registration";
import bookingDetails from './screens/bookingDetails'
// import Slot from './screens/Slot';
import payment from './screens/payment';
import AboutUs from './screens/AboutUs';
import MyProf from './screens/MyProf';


export class firstpage extends Component {

    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
    }

    buttonPress() {
        console.log('called');
        this.props.navigation.navigate('loginpg');
    }

    render() {

        return (

            <View>
                <button onClick={this.buttonPress}>hay</button>
            </View>
        );
    }
}
const AppStackNavigator = createStackNavigator({

    // bar:barcode,
    loginpg: login,
    homepg:homepage,
    booki:Bookings,
    // bar:barcode,
    InfiMaze:Infinity,
    pubpark: publicPark,
    PhoeMaze:Phoenix,
    forgotpg:forgotpass,
    desti:Destination,
    Aboutu:AboutUs,
    myprof:MyProf,
    register:registration,
    bookhere: bookingDetails,
    // Mazemap: Slot,
    pay: payment,
})

const App = createAppContainer(AppStackNavigator);

export default App;