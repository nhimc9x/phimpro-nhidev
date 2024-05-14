import { MenuItem } from './MenuItem/MenuItem'

export const Navbar = () => {
  return (
    <div className="flex text-xl font-semibold text-ct-text-color gap-6 capitalize">
      <MenuItem to='/' title='Trang chủ'/>
      <MenuItem to='/phim-le' title='Phim lẻ'/>
      <MenuItem to='/phim-bo' title='Phim bộ'/>
      <MenuItem to='/hoat-hinh' title='Hoạt hình'/>
      <MenuItem to='/tv-shows' title='TV show'/>
    </div>
  )
}
