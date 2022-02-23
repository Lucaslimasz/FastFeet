import React from 'react';
import Login from './screens/Login';

import {StatusBar} from 'react-native';
import Theme from './styles/theme';
import {ThemeProvider} from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar barStyle="light-content" backgroundColor="#4C33CC" />
      <Login />
    </ThemeProvider>
  );
};
export default App;
