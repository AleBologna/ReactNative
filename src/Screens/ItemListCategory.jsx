import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../Services/shopServices'
import Loader from '../Components/Loader'
import Error from '../Components/Error'
const ItemListCategory = ({
  navigation,
}) => {

  const categorySelected = useSelector(state => state.shopReducer.value.categorySelected)
  const {data: productsSelected, isError, isLoading} =useGetProductsByCategoryQuery(categorySelected) 

  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(()=> {
    //Lógica de manejo de category
    if(productsSelected){
      const productsFiltered = productsSelected.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
      setProducts(productsFiltered)
    }
  }, [productsSelected, keyword])

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/
    const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      setKeywordError("Solo letras y números")
    }

  }  

  return (
    isError?
    <Error/>
    :
    isLoading?
    <Loader/>
    :
    <View style={styles.container}>
        <Search
          onSearch={onSearch}
          error={keywordError}
          keyword={keyword}
          setKeyword={setKeyword}
        />
        <View style={styles.containerFlatList}>
        <FlatList
            data = {products}
            keyExtractor={product => product.id}
            renderItem={({item}) => <ProductItem 
            item={item} 
            navigation={navigation}
            />}
            showsVerticalScrollIndicator={false}
        />
        </View>
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
    container: {
      height:'100%',
      backgroundColor: colors.color3, 
      alignItems:'center',
    },
    containerFlatList:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }
})