import React from "react"
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

export default () => {
    return (
        <View
            style={styles.panel}
        >
            <Button 
                title="Lista"
            />
            <Button 
                title="Mostrar/Ocultar"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 25
    }
})