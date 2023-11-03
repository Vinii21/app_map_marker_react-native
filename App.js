import { StyleSheet, View } from 'react-native';
import { Modal, Map, Panel }  from './components'
import { useState } from 'react';

export default function App() {

  const [puntos, setPuntos] = useState([]);

  const handleLongPress = ({nativeEvent}) => {
    const newPuntos = puntos.concat({coordinate: nativeEvent.container})
    setPuntos(newPuntos)
  }
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Panel />
      <Modal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
