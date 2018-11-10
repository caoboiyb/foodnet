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
import StarRating from 'react-native-star-rating';
import Loading from '../../../components/LoadingContainer';
import { Icons, Colors } from '../../../themes';
import Header from '../../../components/Header';
import ButtonCustom from './ButtonCustom';
import ButtonBookmark from './ButtonBookmark';
import * as d from '../../../utilities/Tranform';
// import ModalViewImage from '../../../components/ModalViewImage';
import styles from './styles';

class HomeOverviewRestaurant extends PureComponent {
  state = {
    modalVisible: false,
    photoView: null,
  };
  componentDidMount() {}

  setModalVisible(visible) {
    console.log('visible', visible);
    this.setState({
      modalVisible: visible,
    });
  }

  renderPhotos = data => {
    if (data.hasOwnProperty('photos')) {
      return (
        <View style={styles.ScrollViewImages}>
          <FlatList
            horizontal
            data={this.props.dataPlaceDetail.data.photos}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <AsyncImage
                  // source={{}}
                  style={styles.ImagesOverView}
                  placeholderColor={Colors.textOpacity10}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    }
    return (
      <View style={styles.ScrollViewImages}>
        <Image
          // source={require('../../../../assets/images/restaurantPhoto.png')}
          style={styles.ImagesOverView}
        />
      </View>
    );
  };

  renderGreencircle = data => {
    if (data.hasOwnProperty('rating')) {
      return (
        <View style={styles.ViewPointWrap}>
          <View style={styles.ViewPoint}>
            <Text style={styles.Point}>
              {this.props.dataPlaceDetail.data.rating}
            </Text>
          </View>
        </View>
      );
    }
    return null;
  };

  render() {
    if (this.props.dataPlaceDetail.isFetching === true) {
      return <Loading />;
    }
    return (
      // <Loading />
      <View style={styles.ViewMain}>
        <Header
          leftHeader={
            <Image source={Icons.back} style={{ marginTop: 2 * d.ratioH }} />
          }
          onPressLeftHeader={this.props.onPressGoBack}
          centerHeader
          rightHeader
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <ModalViewImage
            onShowModalImage={() =>
              this.setModalVisible(!this.state.modalVisible)
            }
            photoView={this.state.photoView}
          />
        </Modal>
        {this.renderPhotos(this.props.dataPlaceDetail.data)}

        <View style={styles.ViewContent}>
          {/* <View style={styles.ViewPointWrap}>
            <View style={styles.ViewPoint}>
              <Text style={styles.Point}>{this.props.dataPlaceDetail.data.rating}</Text>
            </View>
          </View> */}
          {this.renderGreencircle(this.props.dataPlaceDetail.data)}

          <View style={styles.ViewNameRestaurant}>
            <Text style={styles.TextNameRestaurant}>
              {this.props.dataPlaceDetail.data.name}
            </Text>
          </View>

          <View style={styles.ViewTypeRestaurantCost}>
            {/* <View style={styles.ViewTypeRestaurant}>
              <Text style={styles.TextTypeRestaurant}>{data.city}</Text>
            </View> */}
            <View style={styles.ViewCost}>
              <StarRating
                disabled={false}
                emptyStar="ios-star-outline"
                fullStar="ios-star"
                iconSet="Ionicons"
                maxStars={5}
                rating={Math.floor(this.props.dataPlaceDetail.data.rating)}
                fullStarColor="#4CB33E"
                reversed
                starSize={12}
              />
            </View>
          </View>

          <View style={styles.ViewLocation}>
            <Text style={styles.TextStatus}>Open Now</Text>
          </View>

          <View style={styles.ViewLocation}>
            <Text style={styles.TextLocation}>
              {this.props.dataPlaceDetail.data.vicinity}
            </Text>
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
              onPressButton={() =>
                this.props.navigate('Direct', {
                  destination: {
                    latitude: this.props.dataPlaceDetail.data.location.lat,
                    longitude: this.props.dataPlaceDetail.data.location.lng,
                  },
                })
              }
            />
            <ButtonCustom
              title="Call Now"
              iconName={Icons.phoneCall}
              iconColor={Colors.text}
            />
            <ButtonBookmark idRestaurant={this.props.idRestaurant} />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeOverviewRestaurant;
