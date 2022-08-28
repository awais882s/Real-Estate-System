import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { View, StyleSheet, StatusBar } from 'react-native'
import StackNavigation from './src/Navigations/StackNavigation'
import AuthContextProvider from './src/Contexts/AuthContexts'
export default function App() {
  return (
    <AuthContextProvider>
      <View style={styles.main}>
        <StatusBar backgroundColor="#FF2156" />
        <StackNavigation />
      </View>
    </AuthContextProvider>
  )
}
const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%"
  }
})
