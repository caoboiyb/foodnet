import { createStackNavigator } from 'react-navigation';
import Bookmark from '../containers/Bookmark';
import HomeDetail from '../containers/HomeDetail';

export default createStackNavigator(
  {
    Bookmark,
    HomeDetail,
  },
  {
    // TODO change Home to Auth when has asyncStorage
    initialRouteName: 'Bookmark',
    mode: 'card',
    tabBarVisible: false,
    headerMode: 'none',
  },
);
