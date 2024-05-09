import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

export const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <div
        style={{ backgroundImage: 'linear-gradient(rgba(13, 18, 18, 0.596) 10%, #0f0f0f 90%), url(https://image.tmdb.org/t/p/original/5cCfqeUH2f5Gnu7Lh9xepY9TB6x.jpg)' }}
        className="h-[700px] bg-top bg-cover max-w-[1600px] w-full mx-auto"></div>
      <Footer />
    </div>
  )
}
