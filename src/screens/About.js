import React from 'react';
import { Alert, View, StyleSheet, Text, Image, Button } from 'react-native';

export default class About extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>About</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'yellow',
        fontSize: 40,
        textAlign: 'center',
    }
});

