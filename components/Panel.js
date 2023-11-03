import React from "react"
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

export default ({onPressLeft}) => {
    return (
        <View
            style={styles.panel}
        >
            <Button 
                title="Lista"
                onPress={onPressLeft}
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