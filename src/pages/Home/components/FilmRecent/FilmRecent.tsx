import { FilmRecentItem } from './FilmRecentItem/FilmRecentItem'

export const FilmRecent = () => {
  return (
    <div className="">
      <div className="mt-20 mb-10 flex justify-center items-center gap-4">
        <div className="h-0.5 flex-1 bg-gradient-to-l to-80% from-ct-secondary to-transparent"></div>
        <div className="text-2xl text-ct-highlight-color font-bold tracking-wider">Phim mới cập nhật</div>
        <div className="h-0.5 flex-1 bg-gradient-to-r to-80% from-ct-secondary to-transparent"></div>
      </div>
      <FilmRecentItem categoryName='Phim lẻ' linkTo='/phim-le' />
      <FilmRecentItem categoryName='Phim bộ' linkTo='/phim-bo' />
      <FilmRecentItem categoryName='Hoạt hình' linkTo='/phim-hoat-hinh' />
      <FilmRecentItem categoryName='TV Show' linkTo='/tv-show' />
    </div>
  )
}
