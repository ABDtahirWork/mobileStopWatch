import { render } from '@testing-library/react-native'
import TimeBox from './TimeBox'
import { toHaveStyle } from '@testing-library/jest-native'

describe('TimeBox Component', () => {
  expect.extend({ toHaveStyle })
  it('renders the time with leading zero when time is less than 10', () => {
    const { getByText } = render(<TimeBox time={5} />)
    expect(getByText('05')).toBeTruthy()
  })

  it('renders the time without leading zero when time is greater than or equal to 10', () => {
    const { getByText } = render(<TimeBox time={15} />)
    expect(getByText('15')).toBeTruthy()
  })

  it('handles zero time', () => {
    const { getByText } = render(<TimeBox time={0} />)
    expect(getByText('00')).toBeTruthy()
  })
})
