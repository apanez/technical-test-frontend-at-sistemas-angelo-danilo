import { useSelector } from "react-redux"
import { authData } from "../../reducers/auth"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }: { children: JSX.Element}) => {
  const AuthLoginData = useSelector(authData)

  if(!AuthLoginData?.user) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoute
