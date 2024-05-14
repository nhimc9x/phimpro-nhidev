import { NavLink } from 'react-router-dom'
import { Slider } from './Slider/Slider'

type Props = {
  title: string;
  category: string;
}

export const FilmRecentItem = ({ title, category }: Props) => {

  return (
    <div className="mb-4">
      <div className="mb-2 flex justify-between items-center pr-8">
        <div className="text-2xl font-semibold text-white tracking-wider capitalize">{title}</div>
        <NavLink to={`/${category}`}
          className="text-white text-lg px-4 py-1 rounded-full
          hover:ring-ct-secondary ring-1 ring-transparent hover:bg-ct-secondary duration-300"
        >
          Xem thêm
        </NavLink>
      </div>
      <div className="px-10">
        <Slider category={category} />
      </div>
    </div>
  )
}
