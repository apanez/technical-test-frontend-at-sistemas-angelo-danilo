import { authData, logout } from '../../reducers/auth'
import { useSelector, useDispatch } from 'react-redux'
import { ButtonLogout, HomeContent, Welcome } from './styles'

const Home = () => {
  const dispatch = useDispatch()
  const authLoginData = useSelector(authData)

  return (
    <HomeContent>
      <Welcome data-testid="welcome">Bienvenido { authLoginData?.user.email }. Tu Token es: { authLoginData?.accessToken }</Welcome>
      <div>
        <ButtonLogout onClick={() => dispatch(logout())}>Cierra la sesión</ButtonLogout>
      </div>
    </HomeContent>
  )
}

export default Home
