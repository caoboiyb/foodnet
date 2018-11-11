import { createStackNavigator } from 'react-navigation';
import Home from '../containers/Home';
import HomeDetail from '../containers/HomeDetail';
import MyProfile from '../containers/MyProfile';

export default createStackNavigator(
  {
    Home,
    HomeDetail,
    MyProfile,
  },
  {
    // TODO change Home to Auth when has asyncStorage
    initialRouteName: 'Home',
    mode: 'card',
    tabBarVisible: false,
    headerMode: 'none',
  },
);
