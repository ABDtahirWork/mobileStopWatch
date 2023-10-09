import { render, fireEvent } from '@testing-library/react-native'
import Timer from './Timer'

describe('Timer clock', () => {
  it('should display zero minutes and zero seconds', () => {
    const { getAllByText } = render(<Timer time={0} />)
    const text00 = getAllByText('00')
    expect(text00.length).toBe(2)
  })
  it('should display 1 hour and remaining zeros', () => {
    const { getAllByText } = render(<Timer time={3600} />)
    const text00 = getAllByText('00')
    const hour01 = getAllByText('01')
    expect(text00.length).toBe(2)
    expect(hour01.length).toBe(1)
  })
})
