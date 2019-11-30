import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Edit extends React.Component {
  constructor() {
    super();
    this.onPressButton = this.onPressButton.bind(this);
  }

  onPressButton() {
    this.props.navigation.push('Edit')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Edit</Text>
        <Button
          title="Edit"
          onPress={this.onPressButton}
        />
         <Button
          onPress={() => this.props.navigation.dismiss()}
          title="Reset"
        />
      </View>
    );
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
