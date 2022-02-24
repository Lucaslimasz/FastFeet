import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../../screens/Login';
import Delivery from '../../screens/Delivery';

function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Delivery" component={Delivery} />
    </Stack.Navigator>
  );
}

export default Navigation;
