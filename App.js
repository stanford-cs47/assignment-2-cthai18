import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles, Metrics } from './App/Themes';

import NavigationBar from './App/Components/NavigationBar';
// const { width, height } = Dimensions.get('window')

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
