import { NavLink } from 'react-router-dom'

type Props = {
  poster: string;
  name: string;
  year: number;
}
export const CardFilmItem = ({ poster, name, year }: Props) => {
  return (
    <NavLink to='' className="h-[400px] w-full flex flex-col rounded hover:bg-ct-secondary">
      <div
        style={{ backgroundImage: poster ? `url(${poster})` : '#fff' }}
        className="flex-1 m-3 bg-ct-highlight-color bg-top bg-cover rounded-t-sm overflow-hidden"
      >
        <div className="mt-auto bg-blue-500 px-1.5 py-0.5 w-max text-ct-primary font-semibold">{year}</div>
      </div>
      <div className="h-[80px] px-6 flex flex-col">
        <div className="text-xl text-ct-text-color line-clamp-2 font-semibold">{name}</div>
      </div>
    </NavLink>
  )
}
