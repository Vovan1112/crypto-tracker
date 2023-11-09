import { configureStore } from "@reduxjs/toolkit";
import { currenciesApi } from "./currencies/currencies.api";

export const store = configureStore({
    reducer: {[currenciesApi.reducerPath]: currenciesApi.reducer},
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(currenciesApi.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>