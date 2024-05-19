import { FilmRecent } from './components/FilmRecent/FilmRecent'
import { HeroBanner } from './components/HeroBanner/HeroBanner'
import { Search } from './components/Search/Search'

export const Home = () => {
  return (
    <div className="">
      <HeroBanner />
      <div className="xs:px-6 px-4 mt-14">
        <Search />
        <FilmRecent />
      </div>
    </div>
  )
}
