import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './routes/navigation';
import Theme from './styles/theme';

import {ThemeProvider} from 'styled-components';

const Index = () => {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar barStyle="light-content" backgroundColor="#4C33CC" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ThemeProvider>
  );
};
export default Index;
