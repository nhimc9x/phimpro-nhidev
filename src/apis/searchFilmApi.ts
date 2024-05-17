import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ListFilmType } from '../types/type'

export const searchFilmApi = createApi({
  reducerPath: 'searchFilmApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://phimapi.com/v1/api/tim-kiem'
  }),
  endpoints: (builer) => ({
    searchFilmByKeyword: builer.query<ListFilmType, { keyword: string; limit?: number }>({
      query: ({ keyword, limit = 24 }) => `?keyword=${keyword}&limit=${limit}`
    })
  })
})

export const { useSearchFilmByKeywordQuery, useLazySearchFilmByKeywordQuery } = searchFilmApi
