import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import products from '../Data/products.json'
import { colors } from '../Global/Colors'

const ItemDetail = ({navigation, route}) => {

  const {productId} = route.params

  const [product, setProduct] = useState(null)

  useEffect(()=>{
    const productSelected = products.find (el => el.id === productId)
    setProduct(productSelected)
  },[productId])

  return (
    <View>
      <Pressable onPress={() => navigation.goBack()} style={styles.btnBack}>
        <Text>Volver</Text>
      </Pressable>

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
          <Pressable style={styles.btnAdd }>
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
  btnBack:{
    width:'100%',
    backgroundColor:colors.color2,
    alignItems:'center',
    paddingVertical:10,
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