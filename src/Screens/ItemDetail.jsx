import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import products from '../Data/products2.json'
import { colors } from '../Global/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../Features/Cart/cartSlice' 
import Loader from '../Components/Loader'
import Counter from '../Components/Counter'

const ItemDetail = ({route}) => {

  const dispatch = useDispatch()

  const [modalVisible, setModalVisible] = useState(false);

  const {productId} = route.params

  const [product, setProduct] = useState(null)

  const count = useSelector(state => state.counterReducer.value);
  

  useEffect(()=>{
    const productSelected = products.find (el => el.id === productId)
    setProduct(productSelected)
  },[productId])
  
  const onAddCart = () =>{
    dispatch(addCartItem({
      ...product,
      quantity:count,
    }))

    setModalVisible(true)
    
  }

  
  return (
    <View style={styles.container}>
     


    {product ? (
      <View style={styles.containerDetail}>
        <Image 
        source={{uri:product.images[0]}} 
        style={styles.imageDetail}
        resizeMode='cover'
        />
        <Text style={styles.title}>{product.title}</Text>
        <Text>{product.description}</Text>
        <Text style={styles.price}>Price: ${product.price}</Text>
        <View style={styles.btnCenter}> 
        <Counter stock={product.stock}/>
          <Pressable style={styles.btnAdd } onPress={onAddCart}>
            <Text style={styles.textBtn}>Add cart</Text>
          </Pressable>
        </View>
      </View>
      ) : <Loader/>} 

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
              <Text style={styles.modalText}>Se han añadido al carrito {count} producto/s</Text>
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

export default ItemDetail

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  containerDetail:{
    flex:1,
    justifyContent:'flex-start',
    backgroundColor:colors.color4,
    padding:10,
  },
  imageDetail:{
    width:'100%',
    height:330
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
    backgroundColor:colors.color3,

    paddingHorizontal:70,
    paddingVertical:10,
    borderRadius:30,
    margin:10,
  },
  textBtn:{
    color:'#fff'
    },
    modalView: {
      margin: 20,
      marginTop:'55%',
      backgroundColor: colors.color3,
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
      backgroundColor: colors.color4,
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
      color:'#fff'
    },
})