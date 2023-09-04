import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View style={styles.container}>
      <Image
      style={styles.image}
       source={require('../Assets/Images/levisLogo.png')}
       />
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
    image:{
        width:220,
        height:90
    },

})