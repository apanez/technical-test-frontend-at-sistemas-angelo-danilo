import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorField from '../../components/errorField/errorField'
import { useDispatch, useSelector } from 'react-redux'
import { ErrorFields } from './types'
import { isLoading, fetchLogin, isError, authData } from '../../reducers/auth'
import { ButtonUI, ErrorContent, Field, FieldContent, LabelUI, LoginContent } from './styles'

const Login = () => {
  const navigate = useNavigate()
  const isLoginLoading = useSelector(isLoading)
  const isLoginError = useSelector(isError)
  const authLoginData = useSelector(authData)
  const dispatch = useDispatch()
  const [fields, setFields] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState<ErrorFields>({
    email: false,
    password: false
  })

  useEffect(() => {
    if(authLoginData) {
      navigate('/')
    }
  }, [authLoginData, navigate])

  const onValidate = (event: any) => {
    event.preventDefault()

    if (!errors.email && !errors.password) {
      dispatch(fetchLogin({ email: fields.email, password: fields.password }))
    }
  }

  return (
    <LoginContent>
      <form onSubmit={onValidate}>
        <FieldContent>
          <LabelUI>Usuario: </LabelUI>
          <Field
            type="text"
            data-testid="email"
            name="email"
            onChange={(e) => {
              setFields(currentFields => ({ ...currentFields, email: e.target.value }))
              setErrors(currentErrors => ({ ...currentErrors, email: e.target.value === '' }))
            }}
          />
          {errors.email && <ErrorField />}
        </FieldContent>
        <FieldContent>
          <LabelUI>Contraseña:</LabelUI>
          <Field
            type="password"
            data-testid="password"
            name="password"
            onChange={(e) => {
              setFields(currentFields => ({ ...currentFields, password: e.target.value }))
              setErrors(currentErrors => ({ ...currentErrors, password: e.target.value === '' }))
            }}
          />
          {errors.password && <ErrorField />}
        </FieldContent>
        {isLoginError && <ErrorContent data-testid="error-message">Error de autentificación</ErrorContent>}
        <ButtonUI data-testid="button-login" type="submit" disabled={isLoginLoading}>Ingresar</ButtonUI>
      </form>
    </LoginContent>
  )
}

export default Login
