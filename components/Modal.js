import { StyleSheet, Text, View, Modal } from 'react-native';

export default ({children, visibility}) => {
    return (
        <Modal
        animationType='slide'
        transparent={true}
        visible={visibility}
      >
        <View style={styles.center}>
          <View style={styles.modalView}>
            {children}
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "#fff",
        borderRadius: 4,
        width: 250,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3
        }
      },
      center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
})