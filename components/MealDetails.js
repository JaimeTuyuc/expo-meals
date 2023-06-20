import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const MealDetail = ({ duration, complexity, affordability, color = 'black' }) => {
  return (
    <>
      <View style={styles.details}>
        <Text style={[styles.detailItem, { color: color }]}>{duration} m</Text>
        <Text style={[styles.detailItem, { color: color }]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailItem, { color: color }]}>{affordability.toUpperCase()}Y</Text>
      </View>
    </>
  )
}

export default MealDetail

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
})
