import { FilmRecent } from './components/FilmRecent/FilmRecent'
import { HeroBanner } from './components/HeroBanner/HeroBanner'
import { Search } from './components/Search/Search'

export const Home = () => {
  return (
    <div className="">
      <HeroBanner />
      <div className="px-6 mt-14">
        <Search />
        <FilmRecent />
      </div>
    </div>
  )
}
