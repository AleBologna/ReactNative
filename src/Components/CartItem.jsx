import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../Features/Cart/cartSlice";

const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch()

    const onRemoveItem = (cartItem) =>{
        dispatch(removeCartItem(cartItem.id))
    }    
    
    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>
            <Pressable onPress={() => onRemoveItem(cartItem)}>
                <Entypo name="trash" size={30} color="black" />
            </Pressable>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.color4,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Karla",
        fontSize: 19,
        color: '#000',
    },
    text2: {
        fontSize: 17,
        color: colors.color1,
        fontWeight:'bold'
    },
});