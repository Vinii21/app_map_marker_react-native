import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

export default ({markers, closedModal}) => {
    return (
        <>
        <View style={styles.list}>
        <FlatList 
            data={markers.map(marker=>marker.name)}
            renderItem={({item})=>
            <View style={styles.item}>
                <Text>{item}</Text>
            </View>
            }
            keyExtractor={item=>item}
        />
        </View>
        <View style={styles.btn}>
            <Button 
                title="Cerrar"
                onPress={closedModal}
            />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    list: {
        height: Dimensions.get("window").height - 250
    },
    item: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        height: 50,
        justifyContent: "center",
        padding: 15
    },
    btn: {
        paddingBottom: 15
    }
})