import { NavLink } from 'react-router-dom'
import { ListFilmItemType } from '~/types/type'
import fomatCategoryToString from '~/utils/fomatCategoryToString'

type Props = {
  dataFilmItem: ListFilmItemType;
}
export const CardFilmPro = ({ dataFilmItem }: Props) => {

  return (
    <NavLink to={`/phim/${dataFilmItem.slug}`}
      className="w-full max-w-[360px] h-[450px] flex flex-col rounded hover:bg-ct-secondary hover:scale-110 duration-200 shadow-xl shadow-transparent hover:shadow-black/40 group"
    >
      <img
        className='h-[300px] group-hover:h-[200px] object-top object-cover duration-300 m-3 rounded-t overflow-hidden'
        src={`https://img.phimapi.com/${dataFilmItem.poster_url}`}
        loading="lazy"
        alt=""
      />
      <div className="px-6 overflow-hidden">
        <div className="text-xl text-ct-text-color group-hover:text-white line-clamp-2 font-semibold mb-2">{dataFilmItem?.name}</div>
        <div className="flex gap-1.5 mb-2">
          <div className="bg-ct-text-color/50 group-hover:bg-ct-highlight-color px-1.5 py-0.5 w-max text-ct-primary font-bold">{dataFilmItem?.year}</div>
          <div className="bg-ct-text-color/50 group-hover:bg-ct-highlight-color px-1.5 py-0.5 w-max text-ct-primary font-bold">{dataFilmItem?.lang}</div>
          <div className="bg-ct-text-color/50 group-hover:bg-ct-highlight-color px-1.5 py-0.5 w-max text-ct-primary font-bold">{dataFilmItem?.quality}</div>
        </div>
        <div className="group-hover:flex hidden flex-wrap gap-y-1.5 justify-between">
          <div className="text-ct-text-color font-bold">Quốc gia: {dataFilmItem.country[0].name}</div>
          <div className="text-ct-text-color font-bold">Tình trạng: {dataFilmItem.episode_current}</div>
          <div className="text-ct-text-color font-bold">Thời lượng: {dataFilmItem.time}</div>
          <div className="text-ct-text-color font-bold line-clamp-1 w-full">Thể loại: {fomatCategoryToString(dataFilmItem.category)}</div>
        </div>
      </div>
    </NavLink>
  )
}
