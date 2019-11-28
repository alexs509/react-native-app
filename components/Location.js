import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView, { AnimatedRegion, Animated, Marker  } from 'react-native-maps';
import { getDistance } from 'geolib';


export default class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {location:null, velib: null, all:[]};
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 30000
    };

    _getDistance = (lat1, long1, lat2, long2,) => {
      var dis = getDistance(
        { latitude: lat1, longitude: long1 },
        { latitude: lat2, longitude: long2 }
      );
      return dis/1000;
    };

    console.log(_getDistance(48.914822, 2.381170, 48.929230, 2.386580));

    let velibs = [];
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = position;
        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  componentDidMount() {
    return fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=20')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          velib: responseJson.records,
        }, function () {
        });
        (responseJson.records).map((resp) => {
          let lat = resp.fields.geo[0];
          let lng = resp.fields.geo[1];
          if(resp.fields.geo){
          
          }else {

          }
          //this.state.all = [...this.state.all, resp.fields.geo]
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    let lat = 48.865983;
    let long = 2.275725;
    let coord = {
      latitude:null,
      longitude:null
    }
    let coord2 = {
      latitude:48.865983,
      longitude:2.275725
      
    }
    if(this.state.all.length>0) {
      console.log(this.state.all);
    }
    if(this.state.location!= null){ 
      console.log("state");
      coord.latitude = this.state.location.coords.latitude;
      coord.longitude = this.state.location.coords.longitude;
    }
    return (
      <View style={styles.container}>

        <MapView style={styles.map}
          initialRegion={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
            {this.state.location && (
              <View>
            <Marker
              coordinate= {coord}
              title= "Utilisateur"
              description="position actuelle"
            />
            <Marker
              coordinate= {coord2}
              title= "Utilisateur5"
              description="position actuelle"
            />
            </View>
            )}
        </MapView>

        <Text>
          {lat} - {long}
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