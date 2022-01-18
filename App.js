import React from 'react'
import Login from './container/loginScreen/Login'
import { NavigationContainer } from '@react-navigation/native'
import StackScreen from './container/Navigators/StackScreen'
import DashBoard from './container/DashBoardScreen/DashBoard'

export default function App() {
  return (
  <NavigationContainer>
  <StackScreen/>

  </NavigationContainer>
  )
}
