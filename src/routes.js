import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { isDark } from './services/config.json';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Main from './pages/Main';

Main.navigationOptions = {
    tabBarIcon: <Icon name="home" size={26} color={ isDark ? '#fff' : '#000' } />
}

const SecondNavigator = createBottomTabNavigator({
    "Início": Main
}, {
    tabBarOptions: {
        activeBackgroundColor: isDark ? '#000' : '#fff',
        inactiveBackgroundColor: isDark ? '#000' : '#fff',
        activeTintColor: isDark ? '#fff' : '#3c3c3c',
        inactiveTintColor: isDark ? '#fff' : '#3c3c3c',
    }
});

const MainNavigator = createSwitchNavigator({ 
    SecondNavigator
});

export default createAppContainer(MainNavigator);