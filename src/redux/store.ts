import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { recentUpdateFilmApi } from '../apis/recentUpdateFilmApi'
import { listFilmApi } from '../apis/listFilmsApi'
import { searchFilmApi } from '../apis/searchFilmApi'

export const store = configureStore({
  reducer: {
    [recentUpdateFilmApi.reducerPath]: recentUpdateFilmApi.reducer,
    [listFilmApi.reducerPath]: listFilmApi.reducer,
    [searchFilmApi.reducerPath]: searchFilmApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      recentUpdateFilmApi.middleware,
      listFilmApi.middleware,
      searchFilmApi.middleware
    )
})

setupListeners(store.dispatch)
