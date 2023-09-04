import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setIdSelected } from '../Features/Shop/shopSlice'
import { initialState } from '../Features/Counter/counterSlice'

const ProductItem = ({item, navigation}) => {
  
  const {width} = useWindowDimensions()
  const dispatch = useDispatch()

  const onSelectProduct = () => {
    dispatch(setIdSelected(item.id))
    dispatch(initialState())
    navigation.navigate('ItemDetail',{productId:item.id, title: item.title})
  }
  return (
    <View style={{width: width, alignItems:'center'}}>
    <Pressable onPress={onSelectProduct}>
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