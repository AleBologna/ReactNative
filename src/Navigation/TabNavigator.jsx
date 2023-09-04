import React from "react"
import { StyleSheet, View } from "react-native"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShopStack from "./ShopStack"
import CartStack from "./CartStack"
import MyProfileStack from './MyProfileStack'
import { colors } from "../Global/Colors";
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderStack from "./OrderStack";

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (

    <Tab.Navigator
    screenOptions= {{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
    }}>
      <Tab.Screen
      name='Shop'
      component={ShopStack}
      options={{
        tabBarIcon:({focused}) =>{
          return(
            <View>
              <FontAwesome name="shopping-basket" size={24} style={focused? styles.onFocused : styles.notFocused}/>
            </View>
          )
        }
      }}
      />
      <Tab.Screen
      name="Cart"
      component={CartStack}
      options={{
        tabBarIcon:({focused}) =>{
          return(
            <View>
              <FontAwesome name="shopping-cart" size={28} style={focused? styles.onFocused : styles.notFocused} />
            </View>
          )
        }
      }}
      />
      <Tab.Screen
      name="Orders"
      component={OrderStack}
      options={{
        tabBarIcon:({focused}) =>{
          return(
            <View>
              <FontAwesome5 name="list" size={24} style={focused? styles.onFocused : styles.notFocused}/>
            </View>
          )
        }
      }}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Ionicons name="person-circle-outline" size={24}
                style={focused? styles.onFocused : styles.notFocused}
                />
              </View>
            );
          },
        }}
    />
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.color1,
        shadowColor:'black',
        elevation:4,
        height:55,
      },
      onFocused:{
        color:'#fff',
        padding:10,
        borderRadius:100,
        backgroundColor:colors.color5
},
notFocused:{
  color:'#fff',
}
}
)