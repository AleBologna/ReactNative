import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import {signOut } from '../Features/User/userSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { setInitialCart} from '../Features/Cart/cartSlice';
import { deleteSession } from '../SQLite';

const Header = ({navigation, route}) => {
  let title;
  if (route.name === 'Home') title ='Inicio'
  else if (route.name === 'ItemListCategory') title =route.params.category
  else if (route.name === 'ItemDetail') title =route.params.title
  else if (route.name === 'CartScreen') title = "Cart"
  else if (route.name === 'OrderScreen') title = "Orders"
  else title = route.name

  const dispatch = useDispatch()
  const {email, localId} = useSelector(state => state.userReducer.value)

  const onSignOut = async() => {
    try {
      const response = await deleteSession(localId)
      dispatch(signOut()) 
      dispatch(setInitialCart())
    }catch{
      console.log('Error while sign out:');
        console.log(error.message);
    }
  }

  return (
    <View 
        style={styles.containerHeader}>
      <Text style ={styles.text}>{title}</Text>
     {
     route.name !== "Home" && route.name !== "CartScreen" && route.name !== "OrderScreen" && route.name !== "Signup" && route.name !== "Login" ?
     
        <Pressable style={styles.btnBack} onPress={navigation.goBack}>
              <AntDesign name="back" size={24} color="black" />
        </Pressable>
       :null}
       { 
       email?
         <Pressable
         style={styles.btnSignOut}
         onPress={onSignOut}
       >
         <MaterialCommunityIcons name="location-exit" size={24} color="black" />
       </Pressable>
       : null 
    }
    
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
      paddingVertical:15,
        backgroundColor: colors.color1,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:1,
        position:'relative'
    },
    text: {
        fontSize: 25,
        fontFamily: 'Karla'
    },
    btnBack:{
      position:'absolute',
      right:20,
      top:'55%',

    },
    btnSignOut:{
      position:'absolute',
      left:20,
      top:'55%',

    }
})