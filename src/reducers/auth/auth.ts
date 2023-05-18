import { RootState } from '../../store';
import { Auth, RequestLogin } from './types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const TypesAuth = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
};

interface OwnAuth {
  auth: Auth | null
  isError: boolean
  isLoading: boolean
}

const initialState: OwnAuth = {
  auth: null,
  isError: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginFetched: (state, action: PayloadAction<Auth>) => {
      state.isLoading = false;
      state.auth = action.payload;
      state.isError = false
    },
    fetchLogin: (state, action: PayloadAction<RequestLogin>) => {
      state.isLoading = true;
    },
    errorFetchingLogin: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const authData = (state: RootState) => state.auth.auth;
export const isLoading = (state: RootState) => state.auth.isLoading;
export const isError = (state: RootState) => state.auth.isError;

export const { loginFetched, errorFetchingLogin, fetchLogin } = authSlice.actions;

export default authSlice.reducer;
