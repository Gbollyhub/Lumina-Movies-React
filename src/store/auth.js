import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { POST } from "../helpers/server-calls"

export const registerUser = createAsyncThunk( 'auth/registerUser', async (formData) => {
  const response = await POST(formData, '/create-account')
  if(response.data){
    return response
  }

  throw new Error(response.response.data.message);
  
})

export const LoginUser = createAsyncThunk( 'auth/LoginUser', async (formData) => {
  const response = await POST(formData, '/login')
  if(response.data){
    return response
  }

  throw new Error(response.response.data.message);
  
})


export const authSlice = createSlice({
    name: "auth",
    initialState: {
    isAuth: false,
    isError: null,
    user: {},
    message: "",
    status: null,
    loader: false,
    token: null
  },
  reducers: {
    passwordVal: (state) => {
      state.isError = true;
      state.message = 'Password does not match'   
    },
    clearError: (state) => {
      state.isError = null;       
    },
    logout: (state) => {
      state.user = {};
      state.isAuth = false;
    }
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loader = true
      state.status = 'loading'
    },
    [registerUser.fulfilled]: (state,{ payload }) => {
      state.loader = false
      state.isError = false
      state.status = 'success'
      state.message = payload.data.message
    },
    [registerUser.rejected]: (state, action) => {
      state.loader = false
      state.isError = true
      state.status = 'failed'
      state.message = action.error.message
    },
    [LoginUser.pending]: (state) => {
      state.loader = true
      state.status = 'loading'
    },
    [LoginUser.fulfilled]: (state,{ payload }) => {
      state.loader = false
      state.isError = null
      state.isAuth = true
      state.status = 'success'
      state.user = payload.data.data
      state.token = payload.data.token
    },
    [LoginUser.rejected]: (state, action) => {
      state.loader = false
      state.isError = true
      state.status = 'failed'
      state.message = action.error.message
    },
  }
})


// Action creators are generated for each case reducer function
export const { clearError, passwordVal } = authSlice.actions;

export default authSlice.reducer;