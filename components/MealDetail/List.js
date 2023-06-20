import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const List = ({ list }) => {
  return (
    <>
      <View>
        {list.map((element, idx) => {
          return (
            <View key={idx} style={styles.listItem}>
              <Text style={styles.itemText}>{element}</Text>
            </View>
          )
        })}
      </View>
    </>
  )
}

export default List

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
