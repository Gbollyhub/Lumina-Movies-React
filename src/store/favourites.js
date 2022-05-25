import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {GET, GET_WITH_TOKEN, PATCH_WITH_TOKEN } from "../helpers/server-calls"

export const updateFavourites = createAsyncThunk('auth/updateFavourites', async (formData) => {
  const arg = {
    id: formData.id,
    favourite_movies:  formData.favourite_movies
}
  const response = await PATCH_WITH_TOKEN(arg, '/update-favourites',formData.token)
  if (response.data) {
    return response
  }

  throw new Error(response.response.data.message);

})

export const getFavourites = createAsyncThunk('auth/getFavourites', async (formData) => {

  if (formData.user.id) {
    const new_array = []
    const response1 = await GET_WITH_TOKEN(`/favourites?id=${formData.user.id}`,formData.token)
    let fav_id_array = response1.data.favourite_movies

    if (fav_id_array.length > 0) {
      for (let i = 0; i < fav_id_array.length; i++) {
        const response2 = await GET(`/movie?id=${fav_id_array[i]}`)
       
        new_array.push(response2.data)
      }
    }

    return new_array;
  }

  throw new Error("No favourites");

})



export const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favourites: [],
    loader: false,
    isError: null,
    message: "",
    status: null
  },
  reducers: {
    clearError: (state) => {
      state.isError = null;       
    },

    removeFromFavourites: (state, { payload }) => {
      let temp = state.favourites
      let newFav = temp.filter(x => {
        return x.imdbID !== payload
      })
      state.favourites = newFav;
    },
    addToFavourites: (state, { payload }) => {
      state.favourites.push(payload)
    },


  },
  extraReducers: {
    [updateFavourites.pending]: (state) => {
      state.loader = true
      state.status = 'loading'
    },
    [updateFavourites.fulfilled]: (state) => {
      state.loader = false
      state.isError = null
      state.status = 'success'
    },
    [updateFavourites.rejected]: (state, action) => {
      state.loader = false
      state.isError = true
      state.status = 'failed'
      state.message = action.error.message
    },

    [getFavourites.pending]: (state) => {
      state.loader = true
      state.status = 'loading'
    },
    [getFavourites.fulfilled]: (state, { payload }) => {
      state.loader = false
      state.isError = null
      state.status = 'success'
      state.favourites = payload
    },
    [getFavourites.rejected]: (state, action) => {
      state.loader = false
      state.isError = true
      state.status = 'failed'
      state.message = action.error.message
    },


  }
})


// Action creators are generated for each case reducer function
export const { addToFavourites, removeFromFavourites,clearError } = favouritesSlice.actions;

export default favouritesSlice.reducer;