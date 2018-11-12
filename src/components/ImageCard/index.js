import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import card from './styles';

const ImageCard = (props) => (
  <View style={card.container}>
    <TouchableOpacity onPress={props.onPress}>
      <View style={card.circle}>
        <Text style={card.txtCircle}>{props.review}</Text>
      </View>
      <View style={card.imageView}>
        <Image
          style={card.image}
          source={props.image !== null ? props.image : { uri: props.urlImage }}
        />
      </View>
      <View style={card.infoView}>
        <Text style={card.name} numberOfLines={1}>
          {props.name}
        </Text>
        <View style={card.statusView}>
          <Text style={card.status}>
            {props.status === 1 ? 'Open Now' : 'Closed'}
          </Text>
          <Text style={card.dot}>.</Text>
          <Text style={card.distance}>
            {props.restaurantVicinity < 1
              ? `${props.restaurantVicinity * 1000}m`
              : `${props.restaurantVicinity} Km`}{' '}
            from you
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

export default ImageCard;
