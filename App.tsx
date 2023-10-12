import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import CityScreen from './Screens/CityScreen';

const Stack = createStackNavigator();
export default () =>{
  return(
  <NavigationContainer>
    
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="City" component={CityScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
    
  )}