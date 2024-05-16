import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ListFilmType } from '../types/type'

export const listFilmApi = createApi({
  reducerPath: 'listFilmApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://phimapi.com/v1/api/danh-sach'
  }),
  endpoints: (builer) => ({
    getListFilmByCategory: builer.query<ListFilmType, { category: string; page?: number; limit?: number }>({
      query: ({ category, page = 1, limit = 20 }) => `${category}?page=${page}&limit=${limit}`
    })
  })
})

export const { useGetListFilmByCategoryQuery } = listFilmApi
