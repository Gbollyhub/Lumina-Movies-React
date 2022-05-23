import { configureStore  } from "@reduxjs/toolkit";
import authReducer from "./auth";
import moviesReducer from "./movies";


export default configureStore({
    reducer: {
      auth: authReducer,
      movies: moviesReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });
  