import { MenuItem } from './MenuItem/MenuItem'

export const Navbar = () => {
  return (
    <div className="flex text-xl font-semibold text-ct-text-color gap-5 capitalize">
      <MenuItem title='Trang chủ'/>
      <MenuItem title='Phim lẻ'/>
      <MenuItem title='Phim bộ'/>
      <MenuItem title='Hoạt hình'/>
      <MenuItem title='TV show'/>
    </div>
  )
}
