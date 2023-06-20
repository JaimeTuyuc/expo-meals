import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = ({ navigation }) => {
  const RenderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id
      })
    }

    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
  }

  return (
    <>
      <View>
        <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={RenderCategoryItem} numColumns={2} />
      </View>
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})
