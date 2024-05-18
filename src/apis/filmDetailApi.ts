import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FilmDetailType } from '../types/type'

export const filmDetailApi = createApi({
  reducerPath: 'filmDetailApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://phimapi.com/phim'
  }),
  endpoints: (builer) => ({
    getFilmDetailBySlug: builer.query<FilmDetailType, string>({
      query: (slug) => `/${slug}`
    })
  })
})

export const { useGetFilmDetailBySlugQuery } = filmDetailApi
