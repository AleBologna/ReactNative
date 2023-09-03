import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../Components/CartItem'
import { useSelector } from 'react-redux'
import { usePostCartMutation } from '../Services/shopServices'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Cart = () => { 
  const {items: CartData, total, updatedAt, user} = useSelector(state => state.cartReducer.value)
  const [triggerPostCart, result] = usePostCartMutation()

const onConfirm = () => {
  triggerPostCart({items: CartData, total, user, updatedAt})
}

  return (
    <View style={styles.container}>
      {
        total ?
        <View style={styles.flatList}>
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
          <Pressable onPress={onConfirm}>
            <Text>Confirm</Text>
          </Pressable>
          <Text>Total: ${total}</Text>
        </View>
      </View>
      :
      <View style={styles.container2}>
<MaterialCommunityIcons name="cart-off" size={100} color="black" />
<Text> You have not added products to your cart yet</Text>
      </View>
      }
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    justifyContent:'space-between',
    flex:1,
  },
  flatList:{
    flex:1
  },
  confirmContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
    gap:10,
  },
  container2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
})