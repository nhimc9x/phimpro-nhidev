import routes from '~/config/routes'
import { MenuItem } from './MenuItem/MenuItem'

export const Navbar = () => {
  return (
    <div
      className="flex text-xl h-full font-semibold text-ct-text-color gap-0 capitalize flex-col *:text-center *:py-3 shadow
      md:flex-row md:gap-6 md:shadow-none"
    >
      <div className="grid: md:hidden place-content-center bg-[#414141] text-white text-2xl h-[70px] border-b border-ct-text-color mb-2">Danh Mục</div>
      <MenuItem to={routes.home} title='Trang chủ' />
      <MenuItem to={routes.movies} title='Phim lẻ' />
      <MenuItem to={routes.tvSeries} title='Phim bộ' />
      <MenuItem to={routes.cartoons} title='Hoạt hình' />
      <MenuItem to={routes.tvShows} title='TV show' />
      <div className="block md:hidden text-base font-light mt-auto">
        <div className="">Copyright ©2024</div>
        <div className="">Nhideveloper</div>
      </div>
    </div>
  )
}
