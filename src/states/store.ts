import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from '../reducers/auth/auth';

const store = configureStore({
    reducer: combineReducers({ auth: authReducer }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;