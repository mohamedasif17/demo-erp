// app.js
import React from 'react';
import DomainForm from '../demo/src/Screens/DomainScreen';
import LoginForm from '../demo/src/Screens/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from '../demo/src/navigation/BottomTabNavigation';
const Stack = createStackNavigator();

const AppComponent = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="DomainScreen" component={DomainForm}   options={{ headerShown: false }} />
       <Stack.Screen name="LoginForm" component={LoginForm}   options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={BottomTabNavigation}  options={{headerShown:false}} /> 
        
    </Stack.Navigator> 
  </NavigationContainer>
  
  );
}

export default AppComponent;
