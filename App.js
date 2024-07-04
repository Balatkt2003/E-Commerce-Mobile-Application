/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from './src/StartScreen';
import LoginScreen from './src/LoginScreen';
import SignIn from './src/SignIn';
import SignUp from './src/SignUp';
import Bottom from './src/Bottom';


const Stack = createNativeStackNavigator();

const App = () => {
  return  <NavigationContainer>
     <Stack.Navigator>
  <Stack.Screen
    name="Home"
    component={StartScreen}
    options={{title: '   T H U N D E R '}}
  />
  <Stack.Screen name="OUR PRODUCTS" component={StartScreen} />
  <Stack.Screen name="LOGIN PAGE" component={LoginScreen} />
  <Stack.Screen name="SIGN-IN PAGE" component={SignIn}/>
  <Stack.Screen name="SIGN-UP PAGE" component={SignUp}/>
  <Stack.Screen name="Bottom" component={Bottom} options={{title:"", headerShown: false}} />
</Stack.Navigator>
</NavigationContainer>
}
export default App;

