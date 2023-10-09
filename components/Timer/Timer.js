import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import formatTime from '../../utils/helper'
import TimeBox from './TimeBox/TimeBox'

const styles = StyleSheet.create({
  timeDial: {
    flexDirection: 'row',
    borderWidth: 4,
    borderColor: 'black',
    width: 250,
    height: 250,
    borderRadius: 250 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Timer = ({ time }) => {
  const formattedTime = formatTime(time)
  return (
    <View style={styles.timeDial}>
      {formattedTime.days > 0 ? <TimeBox time={formattedTime.days} /> : null}
      {formattedTime.days > 0 ? <Text>:</Text> : null}
      {formattedTime.hours > 0 ? <TimeBox time={formattedTime.hours} /> : null}
      {formattedTime.hours > 0 ? <Text>:</Text> : null}
      <TimeBox time={formattedTime.minutes} />
      <Text>:</Text>
      <TimeBox time={formattedTime.seconds} />
    </View>
  )
}

export default Timer
