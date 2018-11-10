import { createStackNavigator } from 'react-navigation';
import Notification from '../containers/Notification';
import HomeDetail from '../containers/HomeDetail';
import Profile from '../containers/Profile';
import MyProfile from '../containers/MyProfile';

export default createStackNavigator(
  {
    Notification,
    HomeDetail,
    Profile,
    MyProfile,
  },
  {
    // TODO change Home to Auth when has asyncStorage
    initialRouteName: 'Notification',
    mode: 'card',
    tabBarVisible: false,
    headerMode: 'none',
  },
);
