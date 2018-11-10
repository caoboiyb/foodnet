import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const NotiCard = (props) => {
  let content;
  if (props.type === 'follow') {
    content = (
      <View style={styles.ViewFollow}>
        <View style={styles.ViewFollowNameTime}>
          <Text style={styles.TextName}>{props.name}</Text>
          <Text style={styles.TextFollowYou}>followed you</Text>
          <Text style={styles.TextTime}>{props.time} </Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.ViewFollowBtn}
            onPress={props.onFollow}
          >
            <Text style={styles.TextBtnFollow}>
              {props.isFollowed ? 'FOLLOWED' : '+ FOLLOW'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else if (props.type === 'discount') {
    content = (
      <View style={styles.ViewFollow}>
        <View style={styles.ViewFollowNameTime}>
          <Text>
            <Text style={styles.TextName}>{props.name} </Text>
            <Text style={styles.TextFollowYou}>{props.type} </Text>
            <Text style={styles.TextHightlight}>{props.highlight}% </Text>
            <Text style={styles.TextFollowYou}>{props.description} </Text>
          </Text>
          <Text style={styles.TextTime}>{props.time} </Text>
        </View>
      </View>
    );
  } else if (props.type === 'close for maintenance on') {
    content = (
      <View style={styles.ViewFollow}>
        <View style={styles.ViewFollowNameTime}>
          <Text>
            <Text style={styles.TextName}>{props.name} </Text>
            <Text style={styles.TextFollowYou}>{props.type} </Text>
            <Text style={styles.TextHightlight}>{props.highlight} </Text>
          </Text>
          <Text style={styles.TextTime}>{props.time} </Text>
        </View>
      </View>
    );
  } else if (props.type === 'created a collection') {
    content = (
      <View style={styles.ViewFollow}>
        <View style={styles.ViewFollowNameTime}>
          <Text>
            <Text style={styles.TextName}>{props.name} </Text>
            <Text style={styles.TextFollowYou}>{props.type}: </Text>
            <Text style={styles.TextName}>{props.description} </Text>
          </Text>
          <Text style={styles.TextTime}>{props.time} </Text>
        </View>
      </View>
    );
  } else content = null;

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.ViewMain}>
        <View style={styles.ViewAvatar}>
          <Image source={props.avatar} style={styles.Avatar} />
        </View>
        <View style={styles.ViewContent}>{content}</View>
      </View>
    </TouchableOpacity>
  );
};

export default NotiCard;
