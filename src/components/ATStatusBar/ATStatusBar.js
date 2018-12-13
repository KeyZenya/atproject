import React from 'react';
import { View, StatusBar, Platform, StyleSheet } from 'react-native';

const ATStatusBar = (props) => (
    <View style={[styles.statusBar, { backgroundColor: "000" }]}>
      <StatusBar translucent backgroundColor="#000" {...props} />
    </View>
);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
    statusBar: {
      height: STATUSBAR_HEIGHT,
    },
});

export default ATStatusBar;