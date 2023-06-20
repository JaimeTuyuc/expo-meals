import React, { useContext } from 'react'
// import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'
import MealsList from '../components/MealsList/MealsList'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

const FavoriteScreen = ({ navigation }) => {
  // const { ids } = useContext(FavoritesContext)
  const { ids } = useSelector((state) => state.favoriteMeals)
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id))

  if (favoriteMeals.length === 0) {
    return (
      <>
        <View style={styles.rootContainerStyle}>
          <Text style={styles.text}>No favorites yet</Text>
        </View>
      </>
    )
  }

  return (
    <>
      <MealsList items={favoriteMeals} navigation={navigation} />
    </>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  rootContainerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
