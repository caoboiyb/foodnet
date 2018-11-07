import { createBottomTabNavigator, TabNavigator } from 'react-navigation';
import DashboardStack from './dashboardStack';
import Search from '../containers/Search';
import Map from '../containers/Map';
import Notification from '../containers/Notification';
import Bookmark from '../containers/Bookmark';

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
    initialRouteName: 'Dashboard',
    tabBarOptions: {
      ...TabNavigator.Presets.iOSBottomTabs,
      // showLabel: false,
      style: {
        backgroundColor: '#fff',
      },
    },
  },
);
