import { screen } from '@testing-library/react'
import App from './App'
import renderWithWrapper from './test/wrapperTest'

test('renders App component', () => {
  renderWithWrapper(<App />)
  const buttonLogin = screen.getByText('Ingresar')
  expect(buttonLogin).toBeInTheDocument()
});
