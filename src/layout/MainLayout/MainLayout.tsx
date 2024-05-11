import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {

  return (
    <>
      <Header />
      <div className="max-w-[1600px] w-full mx-auto" >
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
