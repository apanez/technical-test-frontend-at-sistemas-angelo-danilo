import { RootState } from '../store';
import { Auth, RequestLogin } from './auth/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    logout: (state) => {
      state.auth = null
      state.isLoading = false;
      state.isError = false;
    },
  },
});

export const authData = (state: RootState) => state.auth.auth;
export const isLoading = (state: RootState) => state.auth.isLoading;
export const isError = (state: RootState) => state.auth.isError;

export const { loginFetched, errorFetchingLogin, fetchLogin, logout } = authSlice.actions;

export default authSlice.reducer;
