import { StyleSheet, View } from 'react-native';
import { Modal, Map }  from './components'

export default function App() {

  return (
    <View style={styles.container}>
      <Map />
      <Modal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
