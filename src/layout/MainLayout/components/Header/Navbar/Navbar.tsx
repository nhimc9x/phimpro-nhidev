import routes from '~/config/routes'
import { MenuItem } from './MenuItem/MenuItem'

export const Navbar = () => {
  return (
    <div className="flex text-xl font-semibold text-ct-text-color gap-6 capitalize">
      <MenuItem to={routes.home} title='Trang chủ'/>
      <MenuItem to={routes.movies} title='Phim lẻ'/>
      <MenuItem to={routes.tvSeries} title='Phim bộ'/>
      <MenuItem to={routes.cartoons} title='Hoạt hình'/>
      <MenuItem to={routes.tvShows} title='TV show'/>
    </div>
  )
}
