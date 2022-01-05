import React, {Component } from 'react'
import QRCode from 'react-native-qrcode-image';
import {Share} from 'react-native';
import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput
} from 'react-native';

class barcode extends Component {
    state = {
        text: 'http://facebook.github.io/react-native/',
    };
    render() {
        return (
            <View style={styles.container}>
                <QRCode
                    value={"https://firebasestorage.googleapis.com/v0/b/p-indicator-cbc21.appspot.com/o/b2.jfif?alt=media&token=24aa4df6-4be9-4ae8-a7e5-4acd463b16ea"}
                    size={200}
                    bgColor='#FFFFFF'
                    fgColor='#000000' />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});

AppRegistry.registerComponent('barcode', () => barcode);

module.exports = barcode;