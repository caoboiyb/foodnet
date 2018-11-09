import { createStackNavigator } from 'react-navigation';
import Search from '../containers/Search';
import HomeDetail from '../containers/HomeDetail';

export default createStackNavigator(
  {
    Search,
    HomeDetail,
  },
  {
    // TODO change Home to Auth when has asyncStorage
    initialRouteName: 'Search',
    mode: 'card',
    tabBarVisible: false,
    headerMode: 'none',
  },
);
