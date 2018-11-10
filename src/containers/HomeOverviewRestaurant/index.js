import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
// import StarRating from 'react-native-star-rating';
// import Loading from '../../../components/LoadingContainer';
import NavBar from '../../components/NavBar';
import Icons from '../../themes/Icons';
import Colors from '../../themes/color';
import Images from '../../themes/Images';
// import Header from '../../../components/Header';
import ButtonCustom from './ButtonCustom';
import ButtonBookmark from './ButtonBookmark';
import * as d from '../../utilities/Tranform';
import styles from './styles';

const dataImageFake = [
  Images.restaurantPhoto,
  Images.restaurantPhotoMenu1,
  Images.restaurantPhotoMenu2,
  Images.restaurantPhotoMenu3,
  Images.restaurantPhotoMenu4,
];

class HomeOverviewRestaurant extends PureComponent {
  state = {};

  render() {
    return (
      <View style={styles.ViewMain}>
        <NavBar
          leftNavBar={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={Icons.back} />
            </TouchableOpacity>
          }
        />
        <View style={styles.ScrollViewImages}>
          <FlatList
            horizontal
            data={dataImageFake}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image source={item} style={styles.ImagesOverView} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.ViewContent}>
          <View style={styles.ViewPointWrap}>
            <View style={styles.ViewPoint}>
              <Text style={styles.Point}>9.8</Text>
            </View>
          </View>

          <View style={styles.ViewNameRestaurant}>
            <Text style={styles.TextNameRestaurant}>Sublimotion</Text>
          </View>

          <View style={styles.ViewTypeRestaurantCost}>
            <View style={styles.ViewCost} />
          </View>

          <View style={styles.ViewLocation}>
            <Text style={styles.TextStatus}>Open Now</Text>
          </View>

          <View style={styles.ViewLocation}>
            <Text style={styles.TextLocation}>Hanoi</Text>
          </View>

          <View style={styles.ViewBtnBottom}>
            <ButtonCustom
              title="8h00 - 22h00"
              iconName={Icons.clockTime}
              iconColor={Colors.default}
            />
            <ButtonCustom
              title="Direct"
              iconName={Icons.directOutLine}
              iconColor={Colors.text}
              onPressButton={() => this.props.navigate('Direct')}
            />
            <ButtonCustom
              title="Call Now"
              iconName={Icons.phoneCall}
              iconColor={Colors.text}
            />
            <ButtonBookmark
              title="Bookmark"
              iconName={Icons.pin}
              iconColor={Colors.text}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeOverviewRestaurant;
