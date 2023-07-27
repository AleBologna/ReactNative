import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'
import { useSelector } from 'react-redux'

const ItemListCategory = ({
  navigation,
}) => {

  const productsSelected = useSelector(state => state.shopReducer.value.productsSelected)

  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(()=> {
    //Lógica de manejo de category
    const productsFiltered = productsSelected.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
    setProducts(productsFiltered)

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
      backgroundColor: colors.color4, 
      alignItems:'center',
    },
    containerFlatList:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }
})