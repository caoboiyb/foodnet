import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import NavBar from '../../components/NavBar';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import * as d from '../../utilities/Tranform';
import Content from './Content';

const dataFake = [
  {
    imagemenu: Images.restaurantPhotoMenu1,
    namemenu: 'Salads, Soups & Chili',
    pricemenu: '17.00',
    detailmenu: 'Neque porro quisquam est qui dolorem ipsum quia dolor...',
  },
  {
    imagemenu: Images.restaurantPhotoMenu2,
    namemenu: 'Smokehouse Combos',
    pricemenu: '21.00',
    detailmenu: 'Neque porro quisquam est qui dolorem ipsum quia dolor...',
  },
  {
    imagemenu: Images.restaurantPhotoMenu3,
    namemenu: 'Chicken & Seafood',
    pricemenu: '10.00',
    detailmenu: 'Neque porro quisquam est qui dolorem ipsum quia dolor...',
  },
  {
    imagemenu: Images.restaurantPhotoMenu4,
    namemenu: 'Party Platter Add-Ons',
    pricemenu: '12.00',
    detailmenu: 'Neque porro quisquam est qui dolorem ipsum quia dolor...',
  },
  {
    imagemenu: Images.restaurantPhotoMenu1,
    namemenu: 'Chicken & Seafood',
    pricemenu: '30.00',
    detailmenu: 'Neque porro quisquam est qui dolorem ipsum quia dolor...',
  },
  {
    imagemenu: Images.restaurantPhotoMenu2,
    namemenu: 'Smokehouse Combos',
    pricemenu: '45.00',
    detailmenu: 'Neque porro quisquam est qui dolorem ipsum quia dolor...',
  },
  {
    imagemenu: Images.restaurantPhotoMenu3,
    namemenu: 'Salads, Soups & Chili',
    pricemenu: '19.00',
    detailmenu: 'Neque porro quisquam est qui dolorem ipsum quia dolor...',
  },
  {
    imagemenu: Images.restaurantPhotoMenu4,
    namemenu: 'Chicken & Seafood',
    pricemenu: '27.00',
    detailmenu: 'Neque porro quisquam est qui dolorem ipsum quia dolor...',
  },
];

class HomeMenuRestaurant extends PureComponent {
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
          title="Menu"
          // rightNavBar={<Image source={Icons.search} />}
        />
        <View style={styles.ViewContent}>
          <FlatList
            data={dataFake}
            renderItem={({ item }) => <Content data={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

export default HomeMenuRestaurant;
