import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RecentFilmType } from '../types/type'

export const recentUpdateFilmApi = createApi({
  reducerPath: 'recentUpdateFilmApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://phimapi.com/danh-sach/phim-moi-cap-nhat'
  }),
  endpoints: (builer) => ({
    getRecentUpdateFlimByPage: builer.query<RecentFilmType, number>({
      query: (page) => `?page=${page}`
    })
  })
})

export const { useGetRecentUpdateFlimByPageQuery } = recentUpdateFilmApi
