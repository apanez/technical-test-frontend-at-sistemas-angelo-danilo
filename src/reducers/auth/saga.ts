import { call, put, takeEvery } from 'redux-saga/effects';
import { loginFetched, fetchLogin, errorFetchingLogin } from './auth';
import { Auth, Params } from './types';
import axios from 'axios';
import { LOGIN_PATH_API } from '../../constants';

async function fetchLoginAPI<T>(email: string, password: string): Promise<T> {
  const response = await axios.post(`${ LOGIN_PATH_API }`, { email, password })
    .then(res => res.data)

  return response as unknown as T
}

export function* handlerLogin({ payload }: Params) {
  const { email, password, navigate } = payload
  try {
      const auth: Auth = yield call(() => fetchLoginAPI(email, password) as any);
      yield put(loginFetched(auth));
      navigate('/')
  } catch (err) {
    yield put(errorFetchingLogin());
  }
}

export default function* loginSaga() {
  yield takeEvery(fetchLogin.type, handlerLogin);
}