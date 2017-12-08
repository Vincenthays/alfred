import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class CalendarItem extends Component {

    render() {
        const note = this.props.note;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{note.title}</Text>
                <Text style={styles.content}>{note.content}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        padding: 5,
        backgroundColor: '#FFFCC1',
    },
    title: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        marginTop: 10,
    }
});

