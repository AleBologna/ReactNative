import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import CategoryItem from '../Components/CategoryItem'
import { useGetCategoriesQuery } from '../Services/shopServices'
import Loader from '../Components/Loader'
import Error from '../Components/Error'

const Home = ({
  navigation,
}) => {
  const {data: categories, isLoading, isError} = useGetCategoriesQuery()

  return (
    isError?
    <Error/>
    :
    isLoading?
    <Loader/>
    :
    <View style={styles.container}>

      <Image
      style={styles.image}
       resizeMode='cover'
       source={{uri: "https://cazaofertas.com.mx/wp-content/uploads/2020/06/Levis-regreso-250620-01.jpg"}}
       />
        <FlatList
            data = {categories}
            keyExtractor={category => category}
            renderItem={({item}) => <CategoryItem item={item} navigation={navigation}/>}
            showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height:'100%',
        backgroundColor: colors.color3,
        alignItems: 'center'
    },
    image:{
      width:'100%',
      height:270
    }
})