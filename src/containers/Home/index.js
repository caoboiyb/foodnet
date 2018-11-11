import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import NavBar from '../../components/NavBar';
import Icons from '../../themes/Icons';
import styles from './styles';
import Images from '../../themes/Images';

const RESTAURANT = 'Restaurant';
const TEACOFFE = 'Coffee & Tea';
const CLUB = 'Club & Bar';

const dataFake = [
  {
    id: 1,
    restaurant_name: 'Perry Jeanesson',
    score: 9.7,
    type: CLUB,
    open: true,
    distance: 153,
    city: 'Amsterdam',
    image: Images.restaurantPhoto,
  },
  {
    id: 2,
    restaurant_name: 'Francklyn Feitosa',
    score: 8.1,
    type: RESTAURANT,
    open: true,
    distance: 222,
    city: 'Dzięgielów',
    image: Images.restaurantPhoto2,
  },
  {
    id: 3,
    restaurant_name: 'Corny Tournie',
    score: 9.0,
    type: RESTAURANT,
    open: false,
    distance: 482,
    city: 'Mollas',
    image: Images.restaurantPhoto3,
  },
  {
    id: 4,
    restaurant_name: 'Fannie Slopier',
    score: 9.7,
    type: TEACOFFE,
    open: true,
    distance: 162,
    city: 'Mayong',
    image: Images.restaurantPhoto4,
  },
  {
    id: 5,
    restaurant_name: 'Yuma Gouldstraw',
    score: 9.1,
    type: RESTAURANT,
    open: true,
    distance: 238,
    city: 'Rio Real',
    image: Images.restaurantPhoto5,
  },
  {
    id: 6,
    restaurant_name: 'Luise Adger',
    score: 8.5,
    type: CLUB,
    open: false,
    distance: 258,
    city: 'Ekibastuz',
    image: Images.restaurantPhoto6,
  },
  {
    id: 7,
    restaurant_name: 'Cammy Eddie',
    score: 8.9,
    type: CLUB,
    open: true,
    distance: 310,
    city: 'Sande',
    image: Images.restaurantPhoto7,
  },
  {
    id: 8,
    restaurant_name: 'Guillema Vittori',
    score: 8.2,
    type: TEACOFFE,
    open: true,
    distance: 352,
    city: 'Sifangxi',
    image: Images.restaurantPhoto8,
  },
  {
    id: 9,
    restaurant_name: 'Berthe Pereira',
    score: 9.7,
    type: RESTAURANT,
    open: true,
    distance: 425,
    city: 'Sandata',
    image: Images.restaurantPhoto9,
  },
  {
    id: 10,
    restaurant_name: 'Jeri Glowacki',
    score: 10.0,
    type: TEACOFFE,
    open: false,
    distance: 385,
    city: 'Velké Losiny',
    image: Images.restaurantPhoto10,
  },
  {
    id: 11,
    restaurant_name: 'Aldin Fetherstan',
    score: 8.9,
    type: CLUB,
    open: false,
    distance: 458,
    city: 'Cincinnati',
    image: Images.restaurantPhoto11,
  },
  {
    id: 12,
    restaurant_name: 'Seth Jedras',
    score: 9.8,
    type: TEACOFFE,
    open: true,
    distance: 182,
    city: 'Des Moines',
    image: Images.restaurantPhoto12,
  },
  {
    id: 13,
    restaurant_name: 'Bryanty Adcock',
    score: 8.0,
    type: CLUB,
    open: false,
    distance: 405,
    city: 'Shayuan',
    image: Images.restaurantPhoto13,
  },
  {
    id: 14,
    restaurant_name: 'Lusa Chapling',
    score: 8.5,
    type: CLUB,
    open: true,
    distance: 157,
    city: 'Hekou',
    image: Images.restaurantPhoto14,
  },
  {
    id: 15,
    restaurant_name: 'Emma Bolmann',
    score: 9.4,
    type: CLUB,
    open: true,
    distance: 180,
    city: 'Charlotte',
    image: Images.restaurantPhoto15,
  },
];

class Home extends Component {
  state = {
    restaurant: true,
    tea: true,
    club: true,
  };

  renderButton = (title, icon, filter) => {
    return (
      <View style={styles.ViewButton}>
        <Image source={icon} style={styles.ButtonTop} />
        <Text
          style={[
            styles.ButtonTopText,
            { color: filter ? 'rgb(66,183,42)' : 'black' },
          ]}
        >
          {title}
        </Text>
      </View>
    );
  };

  renderItem = (item) => {
    let condition = false;
    if (item.type == RESTAURANT && this.state.restaurant == true) {
      condition = true;
    }
    if (item.type == TEACOFFE && this.state.tea == true) {
      condition = true;
    }
    if (item.type == CLUB && this.state.club == true) {
      condition = true;
    }
    if (condition) {
      return (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HomeDetail')}
          style={styles.CardMain}
          key={item.id}
        >
          <Image
            source={item.image}
            style={styles.CardImage}
            resizeMode="cover"
          />
          <View style={styles.CardViewScore}>
            <Text style={styles.CardViewScoreText}>{item.score}</Text>
          </View>
          <View style={styles.CardViewBottom}>
            <Text style={styles.CardResName}>{item.restaurant_name}</Text>
            <Text style={styles.CardResType}>{item.type}</Text>
            <View style={styles.CardOpenView}>
              <Text
                style={[
                  styles.CardResDis,
                  { color: item.open ? 'rgb(66,183,42)' : 'red' },
                ]}
              >
                {item.open ? 'Open Now' : 'Close'}
              </Text>
              <Text style={styles.CardResDis}>
                {'  '}-{'  '}
                {item.distance}m from you
              </Text>
              <Text style={styles.CardResDis}>
                {'  '}-{'  '}
                {item.city}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  };

  render() {
    return (
      <View style={styles.ViewMain}>
        <NavBar
          title="Home"
          rightNavBar={<Image source={Icons.profile} />}
          onPressRight={() => this.props.navigation.navigate('MyProfile')}
        />
        <ScrollView>
          <View style={styles.ButtonTopMain}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                this.setState({ restaurant: !this.state.restaurant })
              }
            >
              {this.renderButton(
                RESTAURANT,
                Icons.resIcon,
                this.state.restaurant,
              )}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.setState({ tea: !this.state.tea })}
            >
              {this.renderButton(TEACOFFE, Icons.tea, this.state.tea)}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.setState({ club: !this.state.club })}
            >
              {this.renderButton(CLUB, Icons.clubbar, this.state.club)}
            </TouchableOpacity>
          </View>
          {dataFake.map((item) => this.renderItem(item))}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
