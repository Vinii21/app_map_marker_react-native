import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default ({title, ...rest}) => {
    return (
        <View style={styles.wrapper}>
            <Text>{title}</Text>
            <TextInput {...rest}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: 40,
        marginBottom: 20
    }
})