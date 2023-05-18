import axios from 'axios'
import { LOGIN_PATH_API } from '../constants'

export async function fetchLoginAPI<T>(email: string, password: string): Promise<T> {
  const response = await axios.post(`${ LOGIN_PATH_API }`, { email, password })
    .then(res => res.data)

  return response as unknown as T
}