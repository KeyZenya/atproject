import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, StyleSheet, ImageBackground, Button } from 'react-native';
import backgroundImage from '../../assets/img/start.png';

import ATStatusBar from '../../components/ATStatusBar/ATStatusBar';
import ATButton from '../../components/ATButton/ATButton';

import Icon from 'react-native-vector-icons/Ionicons'

class LoginScreen extends Component {
    render () {
        return (
                <View style={{borderColor: "red", borderWidth: 1, flex: 1}}>
                    <ATStatusBar barStyle="light-content" />
                    <View style={styles.container}>
                        <Icon size={30} name="ios-add" color="red"/>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: "100%",
        flex: 1,
    },
    container: {
        borderColor: "blue",
        backgroundColor: "#fff",
        borderWidth: 1,
        flex: 1,
        justifyContent: "flex-end",
    },
    text: {
        width: "100%",
        textAlign: "center",
        color: "grey",
        fontSize: 12,
        borderWidth: 1,
        borderColor: "green",
        marginBottom: "7.5%",
    }
});

export default LoginScreen;