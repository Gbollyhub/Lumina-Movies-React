import { configureStore  } from "@reduxjs/toolkit";
import authReducer from "./auth";
import moviesReducer from "./movies";
import favouritesReducer from "./favourites"

export default configureStore({
    reducer: {
      auth: authReducer,
      movies: moviesReducer,
      favourites:favouritesReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });
  