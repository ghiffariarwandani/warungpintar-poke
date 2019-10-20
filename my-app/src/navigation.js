import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './screens/home'
import Detail from './screens/detail'

const RootNavigation = createStackNavigator({
  Home,
  Detail
}, {
  defaultNavigationOptions: {
    headerStyle: {
      height: 60,
      backgroundColor: 'white',
      borderBottomColor: 'transparent'
    },
    headerBackImage: <Image style={{height: 27, width: 27}} source={require('../assets/images/icons8-left-100.png')} />,
    headerBackTitle: null,
    headerLeftContainerStyle: {
      alignItems: 'center',
      paddingLeft: 25
    }
  }
})

const Navigation = createAppContainer(RootNavigation)

export default Navigation;