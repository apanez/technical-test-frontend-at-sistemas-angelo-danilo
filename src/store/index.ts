import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/auth'
import createSagaMiddleware from "@redux-saga/core"
import loginSaga from '../reducers/auth/saga'

const sagaMiddleWare = createSagaMiddleware()

const store = configureStore({
  reducer: combineReducers({ auth: authReducer }),
  middleware: [sagaMiddleWare],
})

sagaMiddleWare.run(loginSaga)

export type RootState = ReturnType<typeof store.getState>

export default store
