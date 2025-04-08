import React from "react"
import { TextInput, Button, Text, View } from "react-native"
import { ThemedText } from "./ThemedText"

export default function LoginForm() {
    return(
        <View>
            <TextInput placeholder="Email"></TextInput>
            <TextInput placeholder="Contraseña"></TextInput>
            <Button title="Enviar" onPress={() => console.log("Enviado")} />
        </View>
    );
}