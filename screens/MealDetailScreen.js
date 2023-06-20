import React, { useContext, useLayoutEffect } from 'react'
import { Image, ScrollView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetail from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import IconButton from '../components/IconButton'
// import { FavoritesContext } from '../store/context/favorites-context'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/redux/favorites'

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params
  // const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext)
  const { ids } = useSelector((state) => state.favoriteMeals)
  const dispatch = useDispatch()

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  const mealsFavorite = ids.includes(mealId)

  const changeFavoriteStatusHandler = () => {
    if (mealsFavorite) {
      dispatch(removeFavorite({ id: mealId }))
    } else {
      dispatch(addFavorite({ id: mealId }))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <>
            <IconButton
              onPress={changeFavoriteStatusHandler}
              icon={mealsFavorite ? 'star' : 'star-outline'}
              color="yellow"
            />
          </>
        )
      },
    })
  }, [navigation, changeFavoriteStatusHandler])

  return (
    <>
      <ScrollView style={styles.rootContainer}>
        <View>
          <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        </View>

        <Text style={styles.title}>{selectedMeal.title}</Text>

        <MealDetail
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          color="white"
        />

        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle subtitle={'Ingredients'} />
            <List list={selectedMeal.ingredients} />

            <Subtitle subtitle={'Steps'} />
            <List list={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  rootContainer: {
    marginBottom: 20,
  },
})
