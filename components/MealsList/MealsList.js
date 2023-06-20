import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem'

const MealsList = ({ navigation, items }) => {
  const renderMealItem = (itemData) => {
    const handlePress = () => {
      navigation.navigate('MealDetails', { mealId: itemData.item.id })
    }
    return (
      <>
        <MealItem
          title={itemData.item.title}
          imageUrl={itemData.item.imageUrl}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          onPress={handlePress}
        />
      </>
    )
  }

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
          // numColumns={2}
        />
      </View>
    </>
  )
}

export default MealsList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
