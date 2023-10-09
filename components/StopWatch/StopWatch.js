import React, { useState, useRef } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import Timer from '../Timer/Timer'
import Button from '../Button/Button'

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
  },
})

const StopWatch = () => {
  const [time, setTime] = useState(3590)
  const [start, setStart] = useState(false)
  const intervalRef = useRef()

  const startTimer = () => {
    setStart(true)
    intervalRef.current = setInterval(
      () => setTime((prevTime) => prevTime + 1),
      1000
    )
  }

  const clearTimer = () => {
    clearInterval(intervalRef.current)
    setTime(0)
    setStart(false)
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current)
    setStart(false)
  }
  return (
    <View>
      <Timer time={time} />
      <View style={styles.btnContainer}>
        <Button
          testID='reset-timer'
          onPress={clearTimer}
          title='Reset Timer'
          backgroundColor='green'
        />
        {start ? (
          <Button
            testID='stop-timer'
            onPress={stopTimer}
            title='Stop Timer'
            backgroundColor='red'
          />
        ) : (
          <Button
            testID='start-timer'
            onPress={startTimer}
            title='Start Timer'
            backgroundColor='green'
          />
        )}
      </View>
    </View>
  )
}

export default StopWatch
