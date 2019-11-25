import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Profile extends React.Component {

  constructor() {
    super();
    this.onPressButton = this.onPressButton.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Go to Jane's profile"
          onPress={this.onPressButton}
        />

        <Button
          title="Reset"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
  onPressButton() {
    this.props.navigation.push('Profile')
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
