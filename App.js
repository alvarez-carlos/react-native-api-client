//Dependencias
/*
1. expo install react-navigation react-native-gesture-handler react-native-reanimated react-native-screens
2. yarn add react-navigation-stack
3. yarn add react-native-safe-area-view react-native-safe-area-context
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { authScreen, mealsScreen, modalScreen, loginScreen, registerScreen } from './screens'



const appNavigator = createStackNavigator(
  {
    MealsScreen: {
      screen: mealsScreen
    }
  },
  {
    initialRouteName: 'MealsScreen',
  }
)

const rootStack = createStackNavigator(
  { 
    HomeScreen: appNavigator,
    ModalScreen: modalScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)


const onBoardingNavigator = createStackNavigator({
  LoginScreen:{
    screen: loginScreen
  },
  RegisterScreen:{
    screen: registerScreen
  }
},
{
  // initialRouteName: 'RegisterScreen'
  initialRouteName: 'LoginScreen'
})


const switchNavigator  = createSwitchNavigator({
  Auth: authScreen,
  OnBoarding: {
    screen: onBoardingNavigator
  },
  Root:{
    screen: rootStack
  }
}
,
{
  initialRouteName: 'Auth'
})


export default createAppContainer(switchNavigator)