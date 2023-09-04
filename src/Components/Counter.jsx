import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Features/Counter/counterSlice";
import { AntDesign } from '@expo/vector-icons';
const Counter = ({stock}) => {

    const dispatch = useDispatch()
    const count = useSelector(state => state.counterReducer.value);
   
    let disabledAdd = count===stock; 
    let disabledSubtract = count===1;

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
 
                <Pressable 
                disabled={disabledSubtract}
                style={styles.button}
                onPress={() => dispatch(decrement())}
            >
                <AntDesign name="minuscircleo" size={36} color="black" />
                 </Pressable>
                                
                <Text style={styles.span}>{count}</Text>
                <Pressable 
                disabled={disabledAdd}
                    style={styles.button}
                    onPress={() => dispatch(increment())}  
                >
                   <AntDesign name="pluscircleo" size={36} color="black" />
                </Pressable>
            </View>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        backgroundColor: colors.color4,
        padding: 2,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5,
        backgroundColor: colors.color4,
    },
    button: {
        padding: 2,
    },
    span: {
        backgroundColor: colors.color4,
        width: 100,
        padding: 5,
        textAlign: "center",
        fontSize: 20,
    },
    spanInput: {
        width: "30%",
        padding: 10,
        textAlign: "center",
        fontSize: 16,
    },

});