import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Subtitle = ({ subtitle }) => {
  return (
    <>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </>
  )
}

export default Subtitle

const styles = StyleSheet.create({
  subtitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
})
