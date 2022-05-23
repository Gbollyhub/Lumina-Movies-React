import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { GET, POST } from "../helpers/server-calls"

export const getPopularMovies = createAsyncThunk( 'movies/getPopularMovies', async () => {
  const response = await GET('/most-popular-movies')
  if(response.data){
    return response
  }

  throw new Error(response.response.data.message);
  
})

export const updateFavourites = createAsyncThunk( 'auth/registerUser', async (formData) => {
    const response = await POST(formData, '/update-favourites')
    if(response.data){
      return response
    }
  
    throw new Error(response.response.data.message);
    
  })



export const moviesSlice = createSlice({
    name: "movies",
    initialState: {
    favourites: [],
    movieList: [],
    loader:false,
    isError: null,
    message: "",
    status: null
  },
  reducers: {
    removeFromFavourites:(state,{payload}) => {
        let temp = state.favourites
        temp.splice(payload,1);
        state.favourites = temp;
        },
    addToFavourites:(state,{payload}) => {
    state.favourites.push(payload)
    },
    setLoader:(state, {payload}) => {
      state.loader = payload
    },
    logout: (state) => {
      state.user = {};
      state.isAuth = false;
    }
  },
  extraReducers: {
    [getPopularMovies.pending]: (state) => {
      state.loader = true
      state.status = 'loading'
    },
    [getPopularMovies.fulfilled]: (state,{ payload }) => {
      state.loader = false
      state.isError = null
      state.status = 'success'
      state.movieList = payload.data.items
    },
    [getPopularMovies.rejected]: (state, action) => {
      state.loader = false
      state.isError = true
      state.status = 'failed'
      state.message = action.error.message
    },

  }
})


// Action creators are generated for each case reducer function
export const { addToFavourites, setLoader } = moviesSlice.actions;

export default moviesSlice.reducer;