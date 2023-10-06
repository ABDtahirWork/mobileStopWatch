import React from 'react'
import { render, screen } from '@testing-library/react-native'
import App from './App'

test('sample test', () => {
  const { getByText } = render(<App />)
  const sampleText = getByText('Open up App.js to start working on your app!')

  expect(sampleText).toBeTruthy()
})
