import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  Images,
  Profiles,
  Metrics
} from '../Themes';

const { width, height } = Dimensions.get('window')


export default class NavigationBar extends React.Component {
  constructor() {
    super();
  }

  onPress = () => {
    alert("Hello");
  }

  render() {
    return (
      <View style={styles.navigationBar}>
        <TouchableOpacity onPress={this.onPress}>
          <Image style={styles.settings} source={{uri: 'https://cdn.pixabay.com/photo/2016/08/23/17/17/settings-1615049_960_720.png'}}/>
        </TouchableOpacity>
        <Image style={styles.logo} source={Images.logo} />
        <TouchableOpacity onPress={this.onPress}>
          <Image style={styles.chat} source={Images.chat} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigationBar: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    marginTop: 15,
    padding: 10,
    paddingLeft: width * .03,
    paddingRight: width * .03,
  },
  settings: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    tintColor: '#C5C5C5',
  },
  logo: {
    height: 40,
    width: 100,
    resizeMode: 'contain',
  },
  chat: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    tintColor: '#C5C5C5',
  }
});
