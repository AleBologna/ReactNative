import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CartItem from '../Components/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { usePostCartMutation } from '../Services/shopServices'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { setInitialCart } from '../Features/Cart/cartSlice'
import { colors } from '../Global/Colors'

const Cart = () => { 
  const {items: CartData, total, updatedAt, user} = useSelector(state => state.cartReducer.value)
  const [triggerPostCart, result] = usePostCartMutation()
  const dispatch = useDispatch();
  
  const [modalVisible, setModalVisible] = useState(false);

const onConfirm = () => {
  triggerPostCart({items: CartData, total, user, updatedAt})
  dispatch(setInitialCart())
  setModalVisible(true)
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
          <Pressable style={styles.btnConfirm} onPress={onConfirm}>
            <Text>Confirm</Text>
          </Pressable>
          <Text style={styles.totalStyle}>Total: ${total}</Text>
        </View>
      </View>
      :
      <View style={styles.container2}>
<MaterialCommunityIcons name="cart-off" size={100} color="white" />
<Text style={{color:'#fff'}}> You have not added products to your cart yet</Text>
      </View>
      }

<Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <Text style={styles.modalText}>¡Muchas gracias!</Text>
              <Text style={styles.modalText}>Tu orden fué tomada con éxito, tus productos llegarán pronto.</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Continuar</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    justifyContent:'space-between',
    flex:1,
    backgroundColor:colors.color3
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
  btnConfirm:{
    marginTop:5,
    backgroundColor:colors.color5,
    padding:20,
    borderRadius:150,
  },
  totalStyle:{
    color:'#fff',
    fontSize:18
  },
  modalView: {
    margin: 20,
    marginTop:'55%',
    backgroundColor: colors.color4,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: colors.color5,
    padding:7,
    borderRadius:50,
  },
  textStyle: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color:'#000'
  },
})