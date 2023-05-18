import { fireEvent, screen, waitFor } from '@testing-library/react'
import renderWithWrapper from '../../test/wrapperTest'
import Login from './login'
import store from '../../store'
import { fetchLogin } from '../../reducers/auth'

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),

  useNavigate: () => mockedUsedNavigate
}));

describe('Test to Login component', () => {
  it('Error to click when empty fields', async () => {
    renderWithWrapper(<Login />)

    fireEvent.click(screen.getByTestId('button-login'));

    await waitFor(() => screen.findByTestId('error-message'))

    const errorAuth = screen.getByText('Error de autentificación')

    expect(errorAuth).toBeInTheDocument()
  })

  it('Navigate to click with filled fields', async () => {
    renderWithWrapper(<Login />)
    fireEvent.click(screen.getByTestId('button-login'));

    await store.dispatch(fetchLogin({ email: 'test@test.com', password: 'test' }))
    
    await waitFor(async() => {
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/')
    })
  })
})