import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

const ATButton = (props) => (
    <TouchableHighlight style={styles.th} onPress={props.onPress}>
        <View style={styles.view}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    th: {
        width: "80%",
        height: "12.5%",
        backgroundColor: "#000",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 50,
    },
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontWeight: "bold"
    }
});

export default ATButton;