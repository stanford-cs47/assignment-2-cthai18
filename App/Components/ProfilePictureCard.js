import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Images, Profiles, Metrics } from '../Themes';

let { width, height } = Dimensions.get('window')
width = width < height ? width : height
height = height > width ? height : width

export default class ProfilePictureCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.profileImage} source={Images.harold} />
        <View style={styles.profileCaptionBox}>
          <Text style={styles.profileHeader}>
            {this.props.profile.name},
            <Text style={{fontWeight: 'normal'}}>
              {this.props.profile.age}
            </Text>
          </Text>
          <Text style={styles.profileDescription}>
            {this.props.profile.occupation}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: '#C5C5C5',
  },
  profileImage: {
    height: width * .9,
    width: width * .9,
    // resizeMode: 'contain',
  },
  profileCaptionBox: {
    backgroundColor: 'white',
    padding: 10,
    paddingLeft: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  profileHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'left',
  },
  profileDescription: {
    color: 'gray',
    fontSize: 16,
  }
});
