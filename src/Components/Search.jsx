import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../Global/Colors';
import { AntDesign } from '@expo/vector-icons';

const Search = ({
    onSearch,
    error = "",
    goBack,
    keyword,
    setKeyword
}) => {

  return (
    <>
    <View style={styles.backTo}>
        <Pressable onPress={goBack}>
            <AntDesign name="back" size={24} color="black" />
        </Pressable>
    </View>

    <View style ={styles.container}>
        
        <TextInput style ={styles.input} 
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
        height: '10%',
        gap: 10,
    },
    backTo:{
        margin:2,
        alignItems: 'flex-start',
    },
    input: {
        width: 250,
        padding: 8,
        fontSize: 18,
        fontFamily: 'Karla',
        backgroundColor: colors.color2,
        borderRadius: 10,
    }
})