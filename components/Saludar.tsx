import React from "react";
import { Text } from "react-native";

interface Props {
    firstname?: string;
    lastname?: string; // Debe ser opcional si tiene valor por defecto
}

export const Saludar: React.FC<Props> = ({
    firstname = "José Carlos",
    lastname = "Chaparro Morales"
}) => {
    return (
        <Text>Hola {firstname} {lastname}</Text>
    );
};

