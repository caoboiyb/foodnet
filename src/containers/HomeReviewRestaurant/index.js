import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import Content from './Content';
import NavBar from '../../components/NavBar';

const dataFake = [
  {
    avatar: Images.avatar1,
    name: 'Corona Australis',
    hours: 23,
    score: 9.2,
    comment:
      'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
    isImages: 0,
  },
  {
    avatar: Images.avatar2,
    name: 'Sagittarius',
    hours: 12,
    score: 9.2,
    comment:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    isImages: 3,
    Images: [Images.review1, Images.review2, Images.review3, Images.review2],
  },
  {
    avatar: Images.avatar3,
    name: 'Triangulum Australe',
    hours: 13,
    score: 5.6,
    comment:
      'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
    isImages: 0,
  },
  {
    avatar: Images.avatar3,
    name: 'Triangulum Australe',
    hours: 13,
    score: 5.6,
    comment:
      'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
    isImages: 0,
  },
];

class HomeReviewRestaurant extends PureComponent {
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
          title="Review"
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

export default HomeReviewRestaurant;
