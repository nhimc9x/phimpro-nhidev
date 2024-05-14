import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout/MainLayout'
import { Home } from './pages/Home/Home'
import { Movies } from './pages/Movies/Movies'
import { TVSeries } from './pages/TVSeries/TVSeries'
import { Cartoons } from './pages/Cartoons/Cartoons'
import { TVShows } from './pages/TVShows/TVShows'
import { NotFound } from './pages/NotFound/NotFound'
import ResetScroll from './components/ResetScroll/ResetScroll'
import routes from './config/routes'

function App() {

  return (
    <Router>
      <ResetScroll />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.movies} element={<Movies />} />
          <Route path={routes.tvSeries} element={<TVSeries />} />
          <Route path={routes.cartoons} element={<Cartoons />} />
          <Route path={routes.tvShows} element={<TVShows />} />
        </Route>
        <Route path={routes.notFound} element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
