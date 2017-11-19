import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import NotesStack from './NotesStack';
import About from '../screens/About';

export default NavTabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="md-home" size={28} color={tintColor} />
            )
        }
    },
    Notes: {
        screen: NotesStack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-apps" size={28} color={tintColor} />
            )
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="md-settings" size={28} color={tintColor} />
            )
        }
    }
}, {
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'yellow',
        style: {
            backgroundColor: 'black'
        },
    },
});