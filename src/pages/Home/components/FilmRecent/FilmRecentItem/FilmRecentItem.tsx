import { NavLink } from 'react-router-dom'
import { Slider } from './Slider/Slider'

type Props = {
  title: string;
  category: 'phim-le' | 'phim-bo' | 'hoat-hinh' | 'tv-shows';
}

export const FilmRecentItem = ({ title, category }: Props) => {

  return (
    <div className="mb-4">
      <div className="mb-2 flex justify-between items-center">
        <div className="text-white text-3xl capitalize">{title}</div>
        <NavLink to={`/${category}`}
          className="text-white text-lg px-4 py-1 rounded-full
          hover:ring-ct-secondary ring-1 ring-transparent hover:bg-ct-secondary duration-300"
        >
          Xem thêm
        </NavLink>
      </div>
      <div className="mdl:px-10 sms:px-4 xs:px-12 px-6">
        <Slider category={category} />
      </div>
    </div>
  )
}
