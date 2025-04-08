import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'

export default function SettingsScreen(props: { navigation: any }) {
    const { navigation } = props

    const goToPage = (pageName: string)=> {
        navigation.navigate(pageName)
    }

  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Button onPress={() => goToPage("Home")} title='Ir a Home'/>
    </SafeAreaView>
  )
}