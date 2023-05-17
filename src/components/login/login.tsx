import { Field, FieldContent, LabelUI, LoginContent } from "./styles"

const Login = () => {
  return (
    <LoginContent>
      <FieldContent>
        <LabelUI>Usuario: </LabelUI>
        <Field type="text" />
      </FieldContent>
      <FieldContent>
        <LabelUI>Contraseña:</LabelUI>
        <Field type="password" />
      </FieldContent>
    </LoginContent>
  )
}

export default Login
