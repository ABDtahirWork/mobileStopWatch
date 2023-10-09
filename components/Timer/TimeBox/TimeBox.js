import React from 'react'
import { View, Text } from 'react-native'

const TimeBox = ({ time }) => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>{time >= 10 ? time : `0${time}`}</Text>
    </View>
  )
}

export default TimeBox
