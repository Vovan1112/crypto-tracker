import { ICurrency } from '@/interfaces/currency.interface';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const API_URL = 'https://api.coingecko.com/api/v3/';
const API_KEY = 'CG-LvBq1pjSTY6AEmUjQSfVURov';

export const currenciesApi = createApi({
    reducerPath: '/api/currencies',
    baseQuery: fetchBaseQuery({baseUrl: `${API_URL}`}),
    endpoints: build => ({
        getAllCurrencies: build.query<ICurrency[], string>({query: () => `coins/markets?vs_currency=usd&per_page=10&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`})
    }),
})


export const {useGetAllCurrenciesQuery} = currenciesApi;