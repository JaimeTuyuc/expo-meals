import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const IconButton = ({ onPress, icon, color = 'yellow' }) => {
  return (
    <>
      <Pressable onPress={onPress} style={({ pressed }) => (pressed ? styles.pressed : styles.buttonContainer)}>
        <Ionicons name={icon} size={24} color={color} />
      </Pressable>
    </>
  )
}

export default IconButton

const styles = StyleSheet.create({
  buttonContainer: {
    marginRight: 8,
  },
  pressed: {
    opacity: 0.5,
    marginRight: 8,
  },
})
