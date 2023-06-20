import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealsList/MealItem'
import MealsList from '../components/MealsList/MealsList'

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params

  const displayMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId))

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title
    navigation.setOptions({ title: categoryTitle })
  }, [categoryId, navigation])

  return <MealsList items={displayMeals} navigation={navigation} />
}

export default MealsOverviewScreen
