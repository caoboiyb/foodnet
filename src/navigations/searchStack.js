import { createStackNavigator } from 'react-navigation';
import Search from '../containers/Search';
import HomeDetail from '../containers/HomeDetail';
import Direct from '../containers/Direct';

export default createStackNavigator(
  {
    Search,
    HomeDetail,
    Direct,
  },
  {
    // TODO change Home to Auth when has asyncStorage
    initialRouteName: 'Search',
    mode: 'card',
    tabBarVisible: false,
    headerMode: 'none',
  },
);
