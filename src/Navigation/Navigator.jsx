import {SafeAreaView, StatusBar, StyleSheet, View } from "react-native"
import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import { Platform } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShopStack from "./ShopStack"
import CartStack from "./CartStack"
import { colors } from "../Global/Colors";
import { FontAwesome } from '@expo/vector-icons';
import OrderStack from "./OrderStack";
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <NavigationContainer>
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
                  <FontAwesome name="shopping-basket" size={24} color={focused? "white" : "black"} />
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
                  <FontAwesome name="shopping-cart" size={28} color={focused? "white" : "black"} />
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
                  <FontAwesome5 name="list" size={24} color={focused? "white" : "black"} />
                </View>
              )
            }
          }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaView>
  )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    tabBar:{
      backgroundColor:colors.color1,
      shadowColor:'black',
      elevation:4,
      // position:'absolute',
      // bottom:10,
      // right:10,
      // left:10,
      height:50,
      // borderRadius:10,

    },
  })