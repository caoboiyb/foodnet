import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import NavBar from '../../components/NavBar';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import mapStyles from './mapStyles';
import { isIphoneX } from '../../utilities/device';
import styles from './styles';
import CardView from './CardView';

class Map extends Component {
  constructor(props) {
    super(props);
    this._marker = [];
    this.markers = [];
  }

  state = {
    region: {
      latitude: 21.025817,
      longitude: 105.800344,
      latitudeDelta: 0.0101,
      longitudeDelta: 0.0104,
    },
    error: null, // eslint-disable-line
    focusing: null,
    destination: null,
    dataRestaurantAround: null,
  };

  componentDidMount() {
    this.onGetRestaurantAround();
  }

  onGetRestaurantAround = () => {
    // eslint-disable-next-line
    fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCthR5BEn21xBOMCGo-qqui8a9jDRNLDOk&location=${
        this.state.region.latitude
      },${this.state.region.longitude}&radius=1000&type=restaurant`,
    )
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({ dataRestaurantAround: resJson.results });
        resJson.results.forEach((markerRegion) => {
          this.markers.push({
            latitude: markerRegion.geometry.location.lat,
            longitude: markerRegion.geometry.location.lng,
          });
        });
      })
      .catch((err) => console.log(`Get restaurant around error: ${err}`));
  };

  onGetRestaurantPhoto = (ref) =>
    `https://maps.googleapis.com/maps/api/place/photo?photoreference=${ref}&sensor=false&maxheight=200&maxwidth=200&key=AIzaSyCthR5BEn21xBOMCGo-qqui8a9jDRNLDOk`;

  getItemLayout = (data, index) => ({
    length: 220,
    offset: isIphoneX ? 219 * index : 210 * index,
    index,
  });

  scrollToIndex = (index) => {
    this._flatListMarker.scrollToIndex({
      animated: true,
      index,
      viewOffset: 1,
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <NavBar
          title="Map"
          rightNavBar={<Image source={Icons.profile} />}
          onPressRight={() => this.props.navigation.navigate('MyProfile')}
        />
        <View style={{ flex: 1 }}>
          <MapView
            region={this.state.region}
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            ref={(ref) => {
              this.map = ref;
            }}
            customMapStyle={mapStyles}
          >
            <Marker coordinate={this.state.region}>
              <Image
                source={Icons.mapPin}
                style={
                  isIphoneX() === true
                    ? styles.mapPinIphoneXStyle
                    : styles.mapPinStyle
                }
              />
            </Marker>
            {this.state.dataRestaurantAround !== null
              ? this.state.dataRestaurantAround.map((markers, index) => (
                  <Marker
                    key={markers.id}
                    // eslint-disable-next-line
                    ref={(marker) =>
                      (this._marker[index] = { marker, id: markers.id })
                    }
                    coordinate={{
                      latitude: markers.geometry.location.lat,
                      longitude: markers.geometry.location.lng,
                    }}
                    onPress={() => {
                      this.setState({
                        focusing: this._marker[index].id,
                        destination: this._marker[index].marker.props
                          .coordinate,
                      });
                      this.scrollToIndex(index);
                    }}
                  >
                    <View style={styles.markerContainer}>
                      <Image
                        source={
                          this.state.focusing === markers.id
                            ? Icons.greenMarker
                            : Icons.grayMarker
                        }
                      />
                      <Image
                        source={
                          markers.photos !== undefined
                            ? {
                                uri: this.onGetRestaurantPhoto(
                                  markers.photos[0].photo_reference,
                                ),
                              }
                            : Images.defaultImage
                        }
                        style={
                          this.state.focusing === markers.id
                            ? styles.focusingPhotoMarkerStyle
                            : styles.defaultPhotoMarkerStyle
                        }
                      />
                    </View>
                  </Marker>
                ))
              : null}
          </MapView>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.dataRestaurantAround}
            // eslint-disable-next-line
            ref={(ref) => (this._flatListMarker = ref)}
            getItemLayout={this.getItemLayout}
            renderItem={({ item, index }) => (
              <CardView
                restaurantPhoto={
                  item.photos !== undefined
                    ? this.onGetRestaurantPhoto(item.photos[0].photo_reference)
                    : null
                }
                navigation={this.props.navigation}
                regionLat={this.state.region.latitude}
                regionLng={this.state.region.longitude}
                latitude={item.geometry.location.lat}
                longitude={item.geometry.location.lng}
                item={item}
                onPress={() => {
                  this.props.navigation.navigate('HomeDetail');
                }}
              />
            )}
            keyExtractor={(item) => item.id}
            style={styles.flatListStyle}
          />
        </View>
      </View>
    );
  }
}

export default Map;
