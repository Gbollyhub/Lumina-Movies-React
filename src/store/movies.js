import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { GET } from "../helpers/server-calls"

export const getSearchedMovies = createAsyncThunk( 'movies/getSearchedMovies', async (formData) => {
  const response = await GET(`/searched-movies?search=${formData}`)
  if(response.data){
    return response
  }

  throw new Error(response.response.data.message);
  
})


export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
    movieList: [],
    loader:false,
    isError: null,
    message: "",
    status: null
  },
  reducers: {
 
    throwSuccess:(state, {payload}) => {
      state.isError = false
      state.message = payload
      },
    throwError:(state, {payload}) => {
      state.isError = true
      state.message = payload
      },
    clearError: (state) => {
      state.isError = null;       
    },


  },
  extraReducers: {
    [getSearchedMovies.pending]: (state) => {
      state.loader = true
      state.status = 'loading'
    },
    [getSearchedMovies.fulfilled]: (state,{ payload }) => {
      state.loader = false
      state.isError = null
      state.status = 'success'
      state.movieList = payload.data.Search
    },
    [getSearchedMovies.rejected]: (state, action) => {
      state.loader = false
      state.isError = true
      state.status = 'failed'
      state.message = 'Movies are not available at this time. Try again'
    },
    
  }
})


// Action creators are generated for each case reducer function
export const { clearError,throwError,throwSuccess } = moviesSlice.actions;

export default moviesSlice.reducer;