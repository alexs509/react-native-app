import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import MapView, { AnimatedRegion, Animated } from 'react-native-maps';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
          initialRegion={{
            latitude: this.props.object.lat,
            longitude: this.props.object.lnt,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <Text>
          {this.props.object.name}
        </Text>
        <Text>
          {this.props.object.lat}
        </Text>
        <Text>
          {this.props.object.lnt}
        </Text>
        <Text>
          {this.props.object.nbbike}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

Details.propTypes = {
  name: PropTypes.string,
  lat: PropTypes.number,
  lnt: PropTypes.number,
  nbbike: PropTypes.number
};


