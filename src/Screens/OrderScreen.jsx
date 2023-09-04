import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import OrderItem from '../Components/OrderItem'
import { useSelector } from 'react-redux'
import { useGetUserOrderQuery } from '../Services/shopServices'
import { colors } from '../Global/Colors'


const OrderScreen = () => {
  const email = useSelector (state => state.userReducer.value.email)

  const {data: orders} = useGetUserOrderQuery(email)

  return (
    <View style={styles.container}>
        <FlatList
        data={orders}
        keyExtractor={orders=> orders.updatedAt}
        renderItem={({item})=>{
            return(
                <OrderItem
                    order={item}
                />
            )
        }}
        />

    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.color4,
  }
})