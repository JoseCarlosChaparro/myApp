import { View, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText';

export default function SettingsScreen(props: { navigation: any }) {
    const { navigation } = props

    const goToPage = (pageName: string)=> {
        navigation.navigate(pageName)
    }

  return (
    <SafeAreaView>
      <ThemedText>SettingsScreen</ThemedText>
      <ThemedText>SettingsScreen</ThemedText>
      <ThemedText>SettingsScreen</ThemedText>
      <ThemedText>SettingsScreen</ThemedText>
      <Button onPress={() => goToPage("Home")} title='Ir a Home'/>
    </SafeAreaView>
  )
}