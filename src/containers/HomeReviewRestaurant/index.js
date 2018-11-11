import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  TextInput,
} from 'react-native';
import styles from './styles';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import Content from '../../components/ContentReview';
import NavBar from '../../components/NavBar';
import { Rating, AirbnbRating } from 'react-native-ratings';

const dataFake = [
  {
    avatar: Images.avatar1,
    name: 'Corona Australis',
    hours: 23,
    score: 4.2,
    comment:
      'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
    isImages: 0,
  },
  {
    avatar: Images.avatar2,
    name: 'Sagittarius',
    hours: 12,
    score: 4.2,
    comment:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    isImages: 3,
    Images: [Images.review1, Images.review2, Images.review3, Images.review2],
  },
  {
    avatar: Images.avatar3,
    name: 'Triangulum Australe',
    hours: 13,
    score: 5.0,
    comment:
      'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
    isImages: 0,
  },
  {
    avatar: Images.avatar3,
    name: 'Triangulum Australe',
    hours: 13,
    score: 3.6,
    comment:
      'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
    isImages: 0,
  },
];

class HomeReviewRestaurant extends PureComponent {
  state = {
    dataFake: dataFake,
    modalVisible: false,
    comment: '',
    rating: 3,
  };

  send = (comment, score) => {
    if (comment == '') {
      this.setState({
        modalVisible: false,
        comment: '',
      });
    } else {
      const dataAdd = {
        avatar: Images.avatar3,
        name: 'Trieu Hoang An',
        hours: 1,
        score: score,
        comment: comment,
        isImages: 0,
      };
      let newarr = this.state.dataFake;
      newarr.unshift(dataAdd);

      this.setState({
        dataFake: newarr,
        modalVisible: false,
        comment: '',
      });
    }
  };

  renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setState({ modalVisible: false });
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this.setState({ modalVisible: false });
          }}
          style={styles.ModalMain}
        >
          <View style={styles.Modalbox}>
            <Text>Bạn nghĩ sao về nhà hàng của chúng tôi</Text>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={20}
              onFinishRating={rating => this.setState({ rating })}
              style={{ paddingVertical: 10 }}
              def
            />
            <TextInput
              style={styles.TextInput}
              onChangeText={text => this.setState({ comment: text })}
              value={this.state.comment}
              placeholder="Tuyệt vời :)"
              autoFocus={true}
              multiline={true}
            />
            <View style={styles.SendBtnView}>
              <TouchableOpacity
                style={styles.SendBtn}
                onPress={() => {
                  this.setState({ modalVisible: false, comment: '' });
                }}
              >
                <Text style={styles.SendBtnText}>Hủy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.SendBtn}
                onPress={() => this.send(this.state.comment, this.state.rating)}
              >
                <Text style={styles.SendBtnText}>Gửi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  render() {
    return (
      <View style={styles.ViewMain}>
        {this.renderModal()}

        <NavBar
          leftNavBar={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={Icons.back} />
            </TouchableOpacity>
          }
          title="Review"
          rightNavBar={
            <TouchableOpacity
              style={styles.ViewBtnAdd}
              onPress={() => this.setState({ modalVisible: true })}
            >
              <Image source={Icons.add} />
            </TouchableOpacity>
          }
        />

        <View style={styles.ViewContent}>
          <FlatList
            data={this.state.dataFake}
            renderItem={({ item }) => <Content data={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

export default HomeReviewRestaurant;
