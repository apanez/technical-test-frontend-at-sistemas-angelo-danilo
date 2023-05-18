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
}

export type Params = {
  type: string,
  payload: RequestLogin
}
