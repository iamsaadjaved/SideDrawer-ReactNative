import React from 'react';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { ProfileScreen , ListScreen , MessageScreen , ActivityScreen , ReportScreen , StatisticScreen , SignOutScreen } from './screens'
import Feather from 'react-native-vector-icons/Feather'
import { createAppContainer } from 'react-navigation'

const TabNavigator = createMaterialBottomTabNavigator({
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            title: "profile",
            tabBarIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
        }
    } ,
    ActivityScreen: {
        screen: ActivityScreen,
        navigationOptions: {
            title: "Activity",
            tabBarIcon: ({tintColor}) => <Feather name="activity" size={16} color={tintColor} />,
            activeColor: '#f0edf6',
            inactiveColor: '#ffffff',
            barStyle: { backgroundColor: '#800000' }
        }
    } ,
    MessageScreen : {
        screen: MessageScreen,
        navigationOptions: {
            title: "Message",
            tabBarIcon: ({tintColor}) => <Feather name="message-square" size={16} color={tintColor} />,
            activeColor: '#f0edf6',
            inactiveColor: '#ffffff',
            barStyle: { backgroundColor: '#FFA500' }
            
        }
    },
    ListScreen: {
        screen: ListScreen,
        navigationOptions: {
            title: "List",
            tabBarIcon: ({tintColor}) => <Feather name="list" size={16} color={tintColor} />,
            activeColor: '#f0edf6',
            inactiveColor: '#ffffff',
            barStyle: { backgroundColor: '#d13560' }
        }
    } 
} , {
    initialRouteName: 'ProfileScreen',
    activeColor: '#f0edf6',
    inactiveColor: '#ffffff',
    barStyle: { backgroundColor: '#694fad' }
  })

export default createAppContainer(TabNavigator)