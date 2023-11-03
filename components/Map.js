import React from "react"
import { StyleSheet, Dimensions } from 'react-native';
import MapView from "react-native-maps";

export default ({onLongPress}) => {
    return (
      <MapView 
        style={styles.map}
        onLongPress={onLongPress}
      />
    )
}

const styles = StyleSheet.create({
      map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 150
      }
})