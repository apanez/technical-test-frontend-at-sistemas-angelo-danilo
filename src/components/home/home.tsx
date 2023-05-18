import { useEffect } from 'react'
import { authData } from '../../reducers/auth/auth'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Welcome } from './styles'

const Home = () => {
  const navigate = useNavigate()
  const authLoginData = useSelector(authData)

  useEffect(() => {
    if(!authLoginData) {
      navigate('/login')
    }
  }, [authLoginData, navigate])

  return (
    <Welcome>Bienvenido { authLoginData?.user.email }. Tu Token es: { authLoginData?.accessToken }</Welcome>
  )
}

export default Home
