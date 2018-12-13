import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, StyleSheet, ImageBackground, Button } from 'react-native';
import backgroundImage from '../../assets/img/start.png';

import ATStatusBar from '../../components/ATStatusBar/ATStatusBar';
import ATButton from '../../components/ATButton/ATButton';

class StartScreen extends Component {

    navigateToLogin = () => {
        this.props.navigator.push({
            screen: "at.LoginScreen",
            navigatorStyle: {
                navBarHidden: true,
                screenBackgroundColor: '#000', 
            }
        })
    }

    render () {
        return (
                <View style={{borderColor: "red", borderWidth: 1, flex: 1}}>
                    <ATStatusBar barStyle="light-content" />
                    <ImageBackground source={backgroundImage} style={styles.background}>
                        <View style={styles.container}>
                            <Text style={styles.text}>{'You will be prompted to take two photos.\n Your full body should be present on the screen'}</Text>                         
                            <ATButton onPress={this.navigateToLogin}>LET'S START</ATButton>
                            <Text style={[styles.text, {color: "#bbb"}]}>For US usage only</Text>
                        </View>
                    </ImageBackground>
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
        borderWidth: 1,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    text: {
        width: "100%",
        textAlign: "center",
        color: "#000",
        fontSize: 12,
        borderWidth: 1,
        borderColor: "green",
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default StartScreen;