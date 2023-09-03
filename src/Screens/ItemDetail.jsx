import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import products from '../Data/products.json'
import { colors } from '../Global/Colors'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../Features/Cart/cartSlice' 

const ItemDetail = ({route}) => {

  const {productId} = route.params

  const dispatch = useDispatch()

  const [product, setProduct] = useState(null)

  useEffect(()=>{
    const productSelected = products.find (el => el.id === productId)
    setProduct(productSelected)
  },[productId])
  
  const onAddCart = () =>{
    dispatch(addCartItem({
      ...product,
      quantity:1,
    }))
  }
  return (
    <View>
    {product ? (
      <View style={styles.containerDetail}>
        <Image 
        source={{uri:product.images[0]}} 
        style={styles.imageDetail}
        resizeMode='cover'
        />
        <Text style={styles.title}>{product.title}</Text>
        <Text>{product.description}</Text>
        <Text style={styles.price}>Precio: ${product.price}</Text>
        <View style={styles.btnCenter}> 
          <Pressable style={styles.btnAdd } onPress={onAddCart}>
            <Text>Add cart</Text>
          </Pressable>
        </View>
      </View>
      ) : null } 
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  containerDetail:{
    justifyContent:'center',
    
    padding:10,
  },
  imageDetail:{
    width:'100%',
    height:300
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    paddingVertical:5,
  },
  price:{
    fontSize:16,
    fontWeight:'bold',
    paddingVertical:5,
  },
  btnCenter:{
    alignItems:'center',
    justifyContent:'center'
  },
  btnAdd:{
    backgroundColor:colors.color1,
    paddingHorizontal:70,
    paddingVertical:10,
    borderRadius:30,
    margin:10,
  },
})