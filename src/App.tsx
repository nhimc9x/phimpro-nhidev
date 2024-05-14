import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout/MainLayout'
import { Home } from './pages/Home/Home'
import { Movies } from './pages/Movies/Movies'
import { TVSeries } from './pages/TVSeries/TVSeries'
import { Cartoons } from './pages/Cartoons/Cartoons'
import { TVShows } from './pages/TVShows/TVShows'
import { NotFound } from './pages/NotFound/NotFound'
import ResetScroll from './components/ResetScroll/ResetScroll'

function App() {

  return (
    <Router>
      <ResetScroll />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/phim-le' element={<Movies />} />
          <Route path='/phim-bo' element={<TVSeries />} />
          <Route path='/hoat-hinh' element={<Cartoons />} />
          <Route path='/tv-shows' element={<TVShows />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
