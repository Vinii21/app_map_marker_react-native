import { StyleSheet, View, Text } from 'react-native';
import { Modal, Map, Panel, Input }  from './components'
import { useState } from 'react';
import { Button } from 'react-native';

export default function App() {

  const [puntos, setPuntos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [puntoTemp, setPuntoTemp] = useState({});
  const [visibility, setVisibility] = useState(false);
  const [modalMode, setModalMode] = useState("new_marker") //new_marker - all_markers

  const handleLongPress = ({nativeEvent}) => {
    setModalMode("new_marker")
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = (text) => {
    setNombre(text)
  }

  const closedModal = () => {
    setPuntoTemp({});
    setVisibility(false)
    setNombre("")
  }

  const handleSubmit = () => {
    const newPuntos = {coordinate: puntoTemp, name: nombre};
    setPuntos(puntos.concat(newPuntos));
    setVisibility(false);
    setNombre("")
    console.log(puntos)
  }

  const handleList = () => {
    setModalMode("all_markers");
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Panel onPressLeft={handleList}/>
      <Modal visibility={visibility}>
        {
          modalMode === "new_marker" ?
            <>
              <Input title={"Nombre"} placeholder='Nombre del punto' onChangeText={handleChangeText}/>
              <View style={styles.modalBtn}>
                <Button 
                  title='Aceptar'
                  onPress={handleSubmit}
                />
                <Button 
                  title='Cancelar'
                  onPress={closedModal}
                />
              </View>
            </>
          :
          <Text>😎</Text>
        }
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modalBtn: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
