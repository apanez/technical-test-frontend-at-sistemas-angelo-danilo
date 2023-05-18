import axios from 'axios'
import { LOGIN_PATH_API } from '../constants'
import { Auth } from '../reducers/auth/types'

export async function fetchLoginAPI(email: string, password: string): Promise<Auth> {
  const response = await axios.post<Auth>(`${ LOGIN_PATH_API }`, { email, password })
    .then(res => res.data)

  return response
}