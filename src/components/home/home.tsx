import { useEffect } from 'react'
import { authData, logout } from '../../reducers/auth/auth'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ButtonLogout, HomeContent, Welcome } from './styles'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authLoginData = useSelector(authData)

  useEffect(() => {
    if(!authLoginData) {
      navigate('/login')
    }
  }, [authLoginData, navigate])

  return (
    <HomeContent>
      <Welcome>Bienvenido { authLoginData?.user.email }. Tu Token es: { authLoginData?.accessToken }</Welcome>
      <div>
        <ButtonLogout onClick={() => dispatch(logout())}>Cierra la sesión</ButtonLogout>
      </div>
    </HomeContent>
  )
}

export default Home
