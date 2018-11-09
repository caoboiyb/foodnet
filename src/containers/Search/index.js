import React, { Component } from 'react';
import { View, Text, StatusBar, TextInput, FlatList } from 'react-native';
import { search, header } from './styles';
import SmallCard from '../../components/SmallCard';
import Images from '../../themes/Images';
import Icons from '../../themes/Icons';

const restaurantData = [
  {
    id: 1,
    image: Images.restaurantPhoto,
    score: '8.0',
    name: 'KFC',
    type: 'Restaurant',
    status: 1,
    distance: 0.8,
  },
  {
    id: 2,
    image: Images.restaurantPhoto,
    score: '7.5',
    name: 'Lotteria',
    type: 'Restaurant',
    status: 0,
    distance: 3,
  },
  {
    id: 3,
    image: Images.restaurantPhoto,
    score: '9.0',
    name: 'Daruma',
    type: 'Restaurant',
    status: 1,
    distance: 8,
  },
  {
    id: 4,
    image: Images.restaurantPhoto,
    score: '8.0',
    name: 'The Coffee House',
    type: 'Cafeteria',
    status: 1,
    distance: 0.5,
  },
  {
    id: 5,
    image: Images.restaurantPhoto,
    score: '5.0',
    name: '1900',
    type: 'Bar',
    status: 1,
    distance: 12,
  },
];

class Search extends Component {
  state = {
    isShow: false,
    search: '',
    place: '',
  };

  onChangeSearch = (text) => {
    this.setState({
      search: text,
    });
  };

  onChangePlace = (text) => {
    this.setState({
      place: text,
    });
  };

  onBlurSearch = () => {
    if (this.state.search.length > 0) {
      this.setState({
        isShow: true,
      });
    }
  };

  searchSubmit = () => {
    if (this.state.search.length > 0) {
      this.setState({
        isShow: true,
      });
    }
  };
  placeSubmit = () => {
    if (this.state.search.length > 0) {
      this.setState({
        isShow: true,
      });
    }
  };

  onPressCard = () => {
    this.props.navigation.navigate('HomeDetail');
  };

  keyExtractor = (item) => String(item.id);

  renderItem = ({ item, index }) => (
    <SmallCard
      image={item.image}
      score={item.score}
      name={item.name}
      type={item.type}
      status={item.status}
      distance={item.distance}
      onPress={this.onPressCard}
    />
  );

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={header.container}>
          <View style={header.searchView}>
            <TextInput
              ref={(ref) => {
                this.search = ref;
              }}
              placeholder="Search Restaurants and ..."
              style={[header.input, { textAlign: 'center' }]}
              underlineColorAndroid="transparent"
              onChangeText={this.onChangeSearch}
              onSubmitEditing={this.searchSubmit}
              onBlur={this.onBlurSearch}
            />
          </View>
          <View style={header.place}>
            <View style={{ width: 36 }}>
              <Text style={header.in}> in </Text>
            </View>

            <View style={header.borderBottom}>
              <TextInput
                ref={(ref) => {
                  this.place = ref;
                }}
                defaultValue="Hanoi, Vietnam"
                style={header.input}
                underlineColorAndroid="transparent"
                onSubmitEditing={this.placeSubmit}
                onChangeText={this.onChangePlace}
              />
            </View>
          </View>
        </View>
        <Text style={search.title}> Recommended for you </Text>
        <View style={{ flex: 1 }}>
          {this.state.isShow ? (
            <FlatList
              data={restaurantData}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              onRefresh={() => {}}
              refreshing={false}
            />
          ) : null}
        </View>
      </View>
    );
  }
}

export default Search;
