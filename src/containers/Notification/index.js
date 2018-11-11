import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import NavBar from '../../components/NavBar';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import NotiCard from '../../components/NotiCard';

class Notification extends Component {
  state = {
    data: [
      {
        id: '1',
        type: 'follow',
        avatar: Images.noti1,
        name: 'tuananhng',
        time: '23 hour',
        isFollowed: false,
      },
      {
        id: '2',
        type: 'close for maintenance on',
        avatar: Images.noti2,
        name: 'Sublimotion',
        highlight: '20/08/2017',
        time: '02 week',
      },
      {
        id: '3',
        type: 'discount',
        avatar: Images.noti3,
        name: 'El Celler de Can Roca',
        highlight: 10,
        description: 'on total bill',
        time: '02 day',
      },
      {
        id: '4',
        type: 'created a collection',
        avatar: Images.noti4,
        name: 'bazilab',
        description: 'The Restaurant',
        time: '23 hour',
      },
    ],
  };

  renderItem = ({ item }) => {
    if (item.type === 'follow') {
      return (
        <NotiCard
          type={item.type}
          name={item.name}
          avatar={item.avatar}
          time={item.time}
          isFollowed={item.isFollowed}
          onFollow={this.onFollow}
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      );
    } else if (item.type === 'close for maintenance on') {
      return (
        <NotiCard
          type={item.type}
          avatar={item.avatar}
          name={item.name}
          highlight={item.highlight}
          time={item.time}
          onPress={() => this.props.navigation.navigate('HomeDetail')}
        />
      );
    } else if (item.type === 'discount') {
      return (
        <NotiCard
          type={item.type}
          name={item.name}
          avatar={item.avatar}
          highlight={item.highlight}
          description={item.description}
          time={item.time}
          onPress={() => this.props.navigation.navigate('HomeDetail')}
        />
      );
    } else if (item.type === 'created a collection') {
      return (
        <NotiCard
          type={item.type}
          name={item.name}
          avatar={item.avatar}
          description={item.description}
          time={item.time}
          onPress={() => this.props.navigation.navigate('HomeDetail')}
        />
      );
    }
  };

  onFollow = () => {
    let newData = this.state.data.slice();
    newData[0].isFollowed = !this.state.data[0].isFollowed;
    this.setState({
      data: newData,
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <NavBar
          title="Notification"
          rightNavBar={<Image source={Icons.profile} />}
          onPressRight={() => this.props.navigation.navigate('MyProfile')}
        />
        <View style={{ flex: 1, paddingTop: 25 }}>
          <FlatList
            data={this.state.data}
            keyExtractor={(item, index) => item.id}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

export default Notification;
