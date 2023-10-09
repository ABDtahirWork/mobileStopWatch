import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

const Button = ({ onPress, title, backgroundColor }) => {
  const styles = StyleSheet.create({
    buttonContainer: {
      width: 90,
      height: 90,
      borderRadius: 90 / 2,
      backgroundColor: backgroundColor || 'blue', // Use the provided background color or default to 'blue'
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  )
}

export default Button
