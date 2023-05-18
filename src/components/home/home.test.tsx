import { BrowserRouter } from 'react-router-dom';
import renderWithWrapper from '../../test/wrapperTest'
import Home from './home'

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),

  useNavigate: () => mockedUsedNavigate
}));

describe('Test to Home component', () => {
  it('Redirect when auth is empty', () => {
    renderWithWrapper(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/login')
  })
})