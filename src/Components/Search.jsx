import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../Global/Colors';
import { AntDesign } from '@expo/vector-icons';

const Search = ({
    onSearch,
    error,
    goBack,
    keyword,
    setKeyword
}) => {

    const {width, height} = useWindowDimensions();
  return (
    <>
    <View style ={styles.container}>
        <Pressable onPress={goBack}>
          <AntDesign name="back" size={24} color="black" />
        </Pressable>
        <TextInput style ={width > 310? styles.input1 : styles.input2} 
            placeholder='Search...'
            value={keyword}
            onChangeText={setKeyword}
        />
        <Pressable onPress={()=>onSearch(keyword)}>
            <FontAwesome name="search" size={24} color="black" />
        </Pressable>
        <Pressable onPress={()=> setKeyword("")}>
            <FontAwesome5 name="eraser" size={24} color="black" />
        </Pressable>

        </View>
       { error ?
         <Text>
            {error}
        </Text>
        : null}
    </>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:10,
        gap: 10,
    },
    input1: {
        width: 250,
        padding: 8,
        fontSize: 18,
        fontFamily: 'Karla',
        backgroundColor: colors.color2,
        borderRadius: 10,
    },
    input2: {
        width: 170,
        padding: 8,
        fontSize: 18,
        fontFamily: 'Karla',
        backgroundColor: colors.color2,
        borderRadius: 10,
    }
})