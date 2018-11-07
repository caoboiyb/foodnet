import { createStackNavigator } from 'react-navigation';
import Home from '../containers/Home';
import HomeDetail from '../containers/HomeDetail';

export default createStackNavigator(
  {
    Home,
    HomeDetail,
  },
  {
    // TODO change Home to Auth when has asyncStorage
    initialRouteName: 'Home',
    mode: 'card',
    tabBarVisible: false,
    headerMode: 'none',
  },
);
