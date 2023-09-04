import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const Loader = () => {
  return (
    <View style={styles.container}>
        <MaterialIcons name="error-outline" size={150} color="black" />
        <Text>Ups! Something went wrong.Try restarting the app </Text>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

})