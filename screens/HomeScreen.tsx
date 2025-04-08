import { View, Button, SafeAreaView } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen(props: { navigation: any }) {
    const { navigation } = props;

    const goToPage = ()=> {
        navigation.navigate("Settings");
    }

return (
    <SafeAreaView>
        <ThemedText>HomeScreen</ThemedText>
        <ThemedText>HomeScreen</ThemedText>
        <ThemedText>HomeScreen</ThemedText>
        <ThemedText>HomeScreen</ThemedText>
        <ThemedText>HomeScreen</ThemedText>
        <ThemedText>HomeScreen</ThemedText>
        <Button onPress={goToPage} title='Ir a Ajustes'/>
    </SafeAreaView>
  );
}
