import { Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import NoteList from '../screens/NoteList';
import NoteAdd from '../screens/NoteAdd';
import NoteEdit from '../screens/NoteEdit';
import About from '../screens/About';

export const NotesStack = StackNavigator({
    Notes: { 
        screen: NoteList,
        navigationOptions: {
            title: 'Notes',
            header: null,
        }
    },
    Add: {
        screen: NoteAdd,
        navigationOptions: {
            title: 'Add',
            header: null,
        }
    },
    Edit: {
        screen: NoteEdit,
        navigationOptions: {
            title: 'Edit',
            header: null,
        }
    },
});

export const NavTabs = TabNavigator({
    Home: { screen: Home },
    Notes: { screen: NotesStack },
    About: { screen: About }
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'yellow',
        style: {
            backgroundColor: 'black',
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        },
    },
});

