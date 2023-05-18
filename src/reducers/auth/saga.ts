import { call, put, takeEvery } from 'redux-saga/effects'
import { loginFetched, fetchLogin, errorFetchingLogin } from '../auth'
import { Auth, Params } from './types'
import { fetchLoginAPI } from '../../services/login'

export function* handleLogin({ payload }: Params) {
  const { email, password } = payload

  try {
    const auth: Auth = yield call(() => fetchLoginAPI(email, password))
    yield put(loginFetched(auth))
  } catch (err) {
    yield put(errorFetchingLogin())
  }
}

export default function* loginSaga() {
  yield takeEvery(fetchLogin.type, handleLogin)
}