import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class CalendarDay extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>{JSON.stringify(this.props)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'green'
    }
});