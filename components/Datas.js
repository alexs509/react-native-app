import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AsyncStorage } from 'react-native';


export default class Datas extends React.Component {
  constructor(props) {
    super(props);
    this.state = { velib: '' }
  }

  componentDidMount() {
    return fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=1&facet=overflowactivation&facet=creditcard&facet=kioskstate&facet=station_state')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          velib: responseJson.records,
        }, function () {
        });
        setItem(this.state);
        getItem();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { velib } = this.state;
    let geo = "";
    if (velib) {
      geo = velib.map((result) => (
        <Text key={result.fields.station_name} >{result.fields.station_name}</Text>
      ));
    }

    return (
      <View style={styles.container}>
        <Text>
          {geo && geo}
        </Text>
      </View>
    );
  }
}

function setItem(state) {
  AsyncStorage.setItem('localisation', (state.velib).toString());
}

function getItem() {
  AsyncStorage.getItem('localisation').then((value) => {
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
