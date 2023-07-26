import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({item, navigation}) => {
  
  const {width} = useWindowDimensions()
  
  const onSelect = (id) => {
  navigation.navigate('ItemDetail',{productId:id, title: item.title})
  }
  return (
    <View style={{width: width, alignItems:'center'}}>
    <Pressable onPress={() => onSelect(item.id)}>
      <Card
        additionalStyle={styles.additionalStylesCard}
      >
          <Text style={styles.textItem}>{item.title}</Text>
          <Image 
            resizeMode='cover'
            style = {styles.image}
            source={{uri: item.images[0]}}
          />
      </Card>
    </Pressable>

    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '40%',
    borderRadius: 8,
  },
  additionalStylesCard: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between'
  }, 
  textItem:{
    textAlign:'center',
    fontFamily: 'Karla',
    width:'55%',
    paddingHorizontal:'5%',
  }
})