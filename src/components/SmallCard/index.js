import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const Card = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.imageView}>
          <Image source={props.image} style={styles.image} />
          <View style={styles.circle}>
            <Text style={styles.txtCircle}>{props.score}</Text>
          </View>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.name}>{props.name}</Text>
          <View style={styles.typeView}>
            <Text style={styles.type}>{props.type}</Text>
          </View>
          <View style={styles.statusView}>
            {props.status === 1 ? (
              <Text style={styles.open}>Open Now</Text>
            ) : (
              <Text style={styles.closed}>Closed</Text>
            )}
            <Text style={styles.dot}>.</Text>
            <Text style={styles.distance}>
              {props.distance < 1
                ? `${props.distance * 1000}m`
                : `${props.distance} Km`}{' '}
              from you
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
