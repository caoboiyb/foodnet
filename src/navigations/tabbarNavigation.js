import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator, TabNavigator } from 'react-navigation';
import DashboardStack from './dashboardStack';
import Search from '../containers/Search';
import Map from '../containers/Map';
import Notification from '../containers/Notification';
import Bookmark from '../containers/Bookmark';
import styles from './styles';
import Icons from '../themes/Icons';

export default createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardStack,
      navigationOptions: ({ navigation }) => ({
        tabBarVisible: navigation.state.index === 0,
      }),
    },
    Search,
    Map,
    Notification,
    Bookmark,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconImage;
        let iconBG;
        if (routeName === 'Dashboard') {
          iconImage = focused ? Icons.homeFocused : Icons.home;
        }
        if (routeName === 'Search') {
          iconImage = focused ? Icons.searchFocused : Icons.search;
        }
        if (routeName === 'Bookmark') {
          iconImage = focused ? Icons.pinFocused : Icons.pin;
        }
        if (routeName === 'Notification') {
          iconImage = focused ? Icons.notificationFocused : Icons.notification;
        } else if (routeName === 'Map') {
          iconBG = (
            <View style={styles.viewPointBG}>
              <View style={styles.viewPointBGsmall}>
                <Image source={Icons.pointer} />
              </View>
            </View>
          );
        }
        return (
          <View style={styles.viewBGTabar}>
            {iconBG || null}
            <Image source={iconImage} style={{ height: 23, width: 21.5 }} />
          </View>
        );
      },
    }),
    initialRouteName: 'Dashboard',
    tabBarOptions: {
      ...TabNavigator.Presets.iOSBottomTabs,
      showLabel: false,
      style: {
        backgroundColor: '#fff',
      },
    },
  },
);
