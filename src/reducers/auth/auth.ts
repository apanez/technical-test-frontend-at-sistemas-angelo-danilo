import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "./types";

interface OwnAuth {
  auth: Auth
}

const initialState: OwnAuth = {
  auth: {
    user: '',
    token: '',
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
});

export default authSlice.reducer;