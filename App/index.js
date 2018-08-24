import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import PrimaryNav from './config/router'
import LandingPage from './screens/LandingPage'

export default class App extends React.Component {
  render () {
    return (
      <PrimaryNav />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
