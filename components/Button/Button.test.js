import Button from './Button'
import { render, fireEvent } from '@testing-library/react-native'
import { toHaveStyle } from '@testing-library/jest-native'

describe('Custom Button', () => {
  expect.extend({ toHaveStyle })
  it('calls onPress function when the button is pressed', () => {
    const mockOnPress = jest.fn()
    const { getByTestId } = render(
      <Button onPress={mockOnPress} title='Test' />
    )
    const pressButton = getByTestId('custom-button')
    fireEvent.press(pressButton)
    expect(mockOnPress).toHaveBeenCalled()
  })

  it('displays the correct title text', () => {
    const mockOnPress = jest.fn()
    const { getByTestId, getByText } = render(
      <Button onPress={mockOnPress} title='Test' />
    )
    const pressButton = getByTestId('custom-button')
    const titleText = getByText('Test')
    expect(pressButton).toBeTruthy()
    expect(titleText).toBeTruthy()
  })

  it('display with a custom background color', () => {
    const mockOnPress = jest.fn()
    const { getByTestId } = render(
      <Button onPress={mockOnPress} title='Test' backgroundColor='red' />
    )
    const pressButton = getByTestId('custom-button')
    expect(pressButton).toHaveStyle({ backgroundColor: 'red' })
  })

  it('displays with default background color when backgroundColor not provided', () => {
    const { getByTestId } = render(<Button onPress={() => {}} title='Test' />)
    const pressButton = getByTestId('custom-button')
    expect(pressButton).toHaveStyle({ backgroundColor: 'blue' })
  })
})
