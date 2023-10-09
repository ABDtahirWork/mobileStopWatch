import { render, fireEvent, act } from '@testing-library/react-native'
import StopWatch from './StopWatch'

describe('StopWatch Component', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('starts andd stops the timer', async () => {
    const { getByText, getByTestId } = render(<StopWatch />)
    const startButton = getByTestId('start-timer')
    fireEvent.press(startButton)
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    const stopButton = getByTestId('stop-timer')
    fireEvent.press(stopButton)
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    const timeAfterStop = getByText('51') //checks 51 seconds after 1 sec passed
    expect(timeAfterStop).toBeTruthy()
  })

  it('resets the timer to minutes and seconds to zero', () => {
    const { getByTestId, getAllByText } = render(<StopWatch />)
    const startButton = getByTestId('start-timer')
    const resetButton = getByTestId('reset-timer')
    fireEvent.press(startButton)
    fireEvent.press(resetButton)
    const timeAfterReset = getAllByText('00')
    expect(timeAfterReset.length).toBe(2)
  })
})
