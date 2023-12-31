import { Dimensions } from 'react-native';
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
        minWidth: Dimensions.get("window").width - 100,
        height: "auto",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3
        }
      },
      center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)"
      },
})