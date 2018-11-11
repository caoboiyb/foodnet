import { createStackNavigator } from 'react-navigation';
import Bookmark from '../containers/Bookmark';
import HomeDetail from '../containers/HomeDetail';
import MyProfile from '../containers/MyProfile';

export default createStackNavigator(
  {
    Bookmark,
    HomeDetail,
    MyProfile,
  },
  {
    // TODO change Home to Auth when has asyncStorage
    initialRouteName: 'Bookmark',
    mode: 'card',
    tabBarVisible: false,
    headerMode: 'none',
  },
);
