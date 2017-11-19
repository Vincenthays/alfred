import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import NoteList from '../screens/NoteList';
import NoteAdd from '../screens/NoteAdd';
import NoteEdit from '../screens/NoteEdit';

export default NotesStack = StackNavigator({
    Notes: {
        screen: NoteList,
        navigationOptions: {
            title: 'Notes',
            header: null
        }
    },
    Add: {
        screen: NoteAdd,
        navigationOptions: {
            title: 'Add'
        }
    },
    Edit: {
        screen: NoteEdit,
        navigationOptions: {
            title: 'Edit'
        }
    },
}, {
    navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: 'black',
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        }
    }
});