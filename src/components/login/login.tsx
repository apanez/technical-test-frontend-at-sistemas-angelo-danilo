import ErrorField from "../errorField/errorField"
import { ButtonUI, Field, FieldContent, LabelUI, LoginContent } from "./styles"
import { useState } from 'react'
import { ErrorFields } from "./types"

const Login = () => {
  const [fields, setFields] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState<ErrorFields>({
    email: false,
    password: false
  })

  const validate = () => {
    if (!errors.email && !errors.password) {
      // TODO: CALL LOGIN REST API
    }
  }

  return (
    <LoginContent>
      <FieldContent>
        <LabelUI>Usuario: </LabelUI>
        <Field
          type="text"
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
          name="password"
          onChange={(e) => {
            setFields(currentFields => ({ ...currentFields, password: e.target.value }))
            setErrors(currentErrors => ({ ...currentErrors, password: e.target.value === '' }))
          }}
        />
        {errors.password && <ErrorField />}
      </FieldContent>
      <ButtonUI onClick={() => validate()}>Ingresar</ButtonUI>
    </LoginContent>
  )
}

export default Login
