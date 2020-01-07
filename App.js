import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Dimensions } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import { ProfileScreen , ListScreen , MessageScreen , ActivityScreen , ReportScreen , StatisticScreen , SignOutScreen } from './screens'

import SideBar from './components/SideBar'

const DrawerNavigator = createDrawerNavigator({
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            title: "profile",
            drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
        }
    } ,
    ActivityScreen: {
        screen: ActivityScreen,
        navigationOptions: {
            title: "Activity",
            drawerIcon: ({tintColor}) => <Feather name="activity" size={16} color={tintColor} />
        }
    } ,
    MessageScreen : {
        screen: MessageScreen,
        navigationOptions: {
            title: "Message",
            drawerIcon: ({tintColor}) => <Feather name="message-square" size={16} color={tintColor} />
        }
    },
    ListScreen: {
        screen: ListScreen,
        navigationOptions: {
            title: "List",
            drawerIcon: ({tintColor}) => <Feather name="list" size={16} color={tintColor} />
        }
    } ,
    ReportScreen : {
        screen: ReportScreen,
        navigationOptions: {
            title: "Report",
            drawerIcon: ({tintColor}) => <Feather name="bar-chart" size={16} color={tintColor} />
        }
    },
    StatisticScreen : {
        screen: StatisticScreen,
        navigationOptions: {
            title: "Statistics",
            drawerIcon: ({tintColor}) => <Feather name="trending-up" size={16} color={tintColor} />
        }
    },
    SignOutScreen : {
        screen: SignOutScreen,
        navigationOptions: {
            title: "SignOut",
            drawerIcon: ({tintColor}) => <Feather name="log-out" size={16} color={tintColor} />
        }
    }
} , { contentComponent: props => <SideBar {...props} />, 
      drawerWidth : Dimensions.get('window').width * 0.85,
      hideStatusBar: true,

      contentOptions: {
          activeBackgroundColor: "rgba(212 ,118,207, 0.2)",
          activeTintColor: "#531158",
          itemContainerStyle: {
              marginTop: 16,
              marginHorizontal: 8
          },
          itemStyle: {
              borderRadius: 8
          }
      }
})

export default createAppContainer(DrawerNavigator)