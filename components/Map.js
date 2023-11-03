import React from "react"
import { StyleSheet, Dimensions } from 'react-native';
import MapView, {Marker} from "react-native-maps";

export default ({onLongPress, markers, pointsFilter}) => {
    return (
      <MapView 
        style={styles.map}
        onLongPress={onLongPress}
      >
        {
          pointsFilter && markers.map(makr=>
              <Marker 
                coordinate={makr.coordinate}
                title={makr.name}
                key={makr.name}
              />
            )
        }
      </MapView>
    )
}

const styles = StyleSheet.create({
      map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 150
      }
})