import routes from '~/config/routes'
import { FilmRecentItem } from './FilmRecentItem/FilmRecentItem'

export const FilmRecent = () => {

  return (
    <div className="">
      <div className="mt-20 mb-10 flex justify-center items-center gap-4">
        <div className="h-0.5 flex-1 bg-gradient-to-l to-80% from-ct-secondary to-transparent"></div>
        <div className="text-2xl text-ct-highlight-color font-bold tracking-wider">Phim mới cập nhật</div>
        <div className="h-0.5 flex-1 bg-gradient-to-r to-80% from-ct-secondary to-transparent"></div>
      </div>
      <FilmRecentItem title='Phim lẻ' category={routes.movies} />
      <FilmRecentItem title='Phim bộ' category={routes.tvSeries} />
      <FilmRecentItem title='Hoạt hình' category={routes.cartoons} />
      <FilmRecentItem title='TV Show' category={routes.tvShows} />
    </div>
  )
}
