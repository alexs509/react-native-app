import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home  from './components/Home';
import Profile from './components/Profile';
import Edit from './components/Edit';


const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: Profile},
  Edit: {screen: Edit},
});

const App = createAppContainer(MainNavigator);

export default App;
