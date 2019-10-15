import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform
} from 'react-native';

import {
  Images,
  Profiles,
  Metrics
} from '../Themes';

const { width, height } = Dimensions.get('window')

export default class ButtonsBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.bar}>
        <View style={[styles.buttonBox, styles.secondaryButtonBox]}>
          <TouchableOpacity>
            <Image style={[styles.button, styles.secondaryButton]} source={Images.rewind}/>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttonBox, styles.primaryButtonBox]}>
          <TouchableOpacity>
            <Image style={[styles.button, styles.primaryButton]} source={Images.nope}/>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttonBox, styles.secondaryButtonBox]}>
          <TouchableOpacity>
            <Image style={[styles.button, styles.secondaryButton]} source={Images.boost}/>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttonBox, styles.primaryButtonBox]}>
          <TouchableOpacity>
            <Image style={[styles.button, styles.primaryButton]} source={Images.like}/>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttonBox, styles.secondaryButtonBox]}>
          <TouchableOpacity>
            <Image style={[styles.button, styles.secondaryButton]} source={Images.superLike}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width * .9,
    height: 50,
    marginBottom: 40,
  },
  button: {
    resizeMode: 'contain',
  },
  buttonBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  primaryButtonBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  secondaryButtonBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  primaryButton: {
    width: 30,
    height: 30,
  },
  secondaryButton: {
    width: 25,
    height: 25,
  }
});
