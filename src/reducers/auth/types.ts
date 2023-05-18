import { NavigateFunction } from 'react-router-dom'

interface User {
  email: string
  id: number
}

export interface Auth {
  user: User
  accessToken: string
}

export interface RequestLogin {
  email: string
  password: string
  navigate: NavigateFunction
}

export type Params = {
  type: string,
  payload: RequestLogin
}
