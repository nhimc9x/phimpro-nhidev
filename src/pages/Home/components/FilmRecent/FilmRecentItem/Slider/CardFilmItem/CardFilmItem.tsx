import { NavLink } from 'react-router-dom'
import { ListFilmItemType } from '~/types/type'

type Props = {
  dataFilmItem: ListFilmItemType;
}
export const CardFilmItem = ({ dataFilmItem }: Props) => {
  return (
    <NavLink
      to={`/phim/${dataFilmItem?.slug}`}
      className="h-[400px] w-full flex flex-col rounded hover:bg-ct-secondary group"
    >
      <div
        style={{ backgroundImage: dataFilmItem ? `url(https://phimimg.com/${dataFilmItem?.poster_url})` : '#fff' }}
        className="flex-1 m-3 bg-top bg-cover rounded-t-sm overflow-hidden flex flex-col justify-between"
      >
        <div className="bg-ct-highlight-color/80 px-2 py-0.5 text-lg w-max text-ct-primary font-semibold">{dataFilmItem?.episode_current}</div>
        <div className="flex gap-1 mb-2 ml-2">
          <div className="bg-white/60 group-hover:bg-ct-highlight-color/80 flex items-center h-max duration-200 backdrop-blur-[2px] px-1.5 py-0.5 w-max text-ct-primary font-bold">{dataFilmItem?.year}</div>
          <div className="bg-white/60 group-hover:bg-ct-highlight-color/80 flex items-center h-max duration-200 backdrop-blur-[2px] px-1.5 py-0.5 w-max text-ct-primary font-bold">{dataFilmItem?.lang}</div>
          <div className="bg-white/60 group-hover:bg-ct-highlight-color/80 flex items-center h-max duration-200 backdrop-blur-[2px] px-1.5 py-0.5 w-max text-ct-primary font-bold">{dataFilmItem?.quality}</div>
        </div>
      </div>
      <div className="h-[80px] px-6 flex flex-col">
        <div className="text-xl text-ct-text-color line-clamp-2 font-semibold">{dataFilmItem?.name}</div>
      </div>
    </NavLink >
  )
}
