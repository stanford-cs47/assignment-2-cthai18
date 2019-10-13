import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Images, Profiles, Metrics } from '../Themes';

const { width, height } = Dimensions.get('window')


export default class NavigationBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.navigationBar}>
        <Image style={styles.settings} source={{uri: 'https://cdn.pixabay.com/photo/2016/08/23/17/17/settings-1615049_960_720.png'}}/>
        <Image style={styles.logo} source={Images.logo} />
        <Image style={styles.chat} source={Images.chat} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigationBar: {
    // width: 50,
    width: width,
    height: height,
    // width: Metrics.screenWidth,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  settings: {
    flex: 1,
    height: 40,
    width: 40,
    resizeMode: 'contain'
  },
  logo: {
    flex: 1,
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  chat: {
    flex:1,
    height: 40,
    width: 40,
    resizeMode: 'contain',
  }
});
