import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen(props: { navigation: any }) {
    const { navigation } = props

    const goToPage = ()=> {
        navigation.navigate("Settings")
    }

return (
    <View>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Button onPress={goToPage} title='Ir a Ajustes'/>
    </View>
  )
}
