import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartData from '../Data/cart.json'
import CartItem from '../Components/CartItem'

const Cart = () => {
  const total = CartData.reduce((acc, currentItem) => acc + currentItem.price * currentItem.quantity,0)
  return (
    <View style={styles.container}>
      <FlatList
      data={CartData}
      keyExtractor={cartItem => cartItem.id}
      renderItem={({item})=>{
        return <CartItem
        cartItem={item}
        />
      }}
      />
      <View style={styles.confirmContainer}>
        <Pressable>
          <Text>Confirm</Text>
        </Pressable>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    justifyContent:'space-between',
    flex:1,
  },
  confirmContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
    gap:10,
  },
})