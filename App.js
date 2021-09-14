// In App.js in a new project

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Router from './src/routes/Router';
import { WarnaUtama } from './src/utils/Colors';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(250, 225, 225)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};


function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar
        backgroundColor={WarnaUtama} />
      <Router />
    </NavigationContainer>
  );
}

export default App;