import { screen } from '@testing-library/react';
import renderWithWrapper from '../../test/wrapperTest'
import Home from './home'

describe('Test to Home component', () => {
  it('render home component', () => {
    renderWithWrapper(<Home />)

    expect(screen.getByText(/Bienvenido/i)).toBeInTheDocument()
  })
})