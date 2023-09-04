import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { colors } from "../Global/Colors";

const AddressItem = ({ location, navigation }) => {

    const onChangeLocation = () => {
        navigation.navigate('Location Selector')
    }

    return (
        <View style={styles.container} onPress={() => {}}>
            <Text  style={styles.text}>To this ubication we are going to send the products.</Text>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {location.address}
                </Text>
            </View>
            <Pressable onPress={onChangeLocation}>
                <Entypo name="location" size={30} color="white">
                    <Text style={styles.text2}>Change</Text>
                </Entypo>
            </Pressable>
        </View>
    );
};

export default AddressItem;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.color1,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        gap:30,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        textAlign:'center',
        fontFamily: "Karla",
        fontSize: 17,
        color: "white",
    },
    text2: {
        fontFamily: "Karla",
        fontSize: 19,
        color: colors.color4,
    },
});