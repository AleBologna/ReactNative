import { Image, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({item, navigation}) => {

const onSelect = (id) => {
  navigation.navigate('ItemDetail',{productId:id})
}

  return (
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