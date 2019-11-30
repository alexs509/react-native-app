import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import MapView, { AnimatedRegion, Animated, Marker } from 'react-native-maps';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
      <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <MapView style={styles.map}
              initialRegion={{
                latitude: this.props.lat,
                longitude: this.props.lnt,
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,
              }}
            >
              <Marker
                coordinate={{
                  latitude: this.props.lat,
                  longitude: this.props.lnt,
                }}
                title={this.props.name}
                description={this.props.name}
              />
            </MapView>
          </View>

        <View style={styles.container}>
          <Text style={styles.titre}>{this.props.name}</Text>
            <View style={styles.text}>
              <Text>🚴‍♂️ - Nombre de vélo mécanique : <Text style={styles.bold}>{this.props.nbbike}</Text> </Text>
              <Text>🚴‍♀️ - Nombre vélo électrique : <Text style={styles.bold}>{this.props.nbebike}</Text> </Text>
              <Text>🔓 - Nmbre de bornes disponibles : <Text style={styles.bold}>{this.props.nbfree}</Text> </Text>
            </View>
        </View>
      </View>
    </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titre: {
    fontWeight: 'bold',
    color: 'goldenrod',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    top: 25,
    left: 50,
  },
  bold: {
    fontWeight: 'bold',
    color: 'goldenrod',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
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
  nbbike: PropTypes.number,
  nbfree: PropTypes.number,
  nbebike: PropTypes.number
};


