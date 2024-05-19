import { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import { useGetRecentUpdateFlimByPageQuery } from '~/apis/recentUpdateFilmApi'
import { RecentFilmItemType } from '~/types/type'
import { Loading } from '~/components/Loading/Loading'
import { NavLink } from 'react-router-dom'

export const HeroBanner = () => {
  const savedBannerData = sessionStorage.getItem('bannerData')

  const { data, error } = useGetRecentUpdateFlimByPageQuery(1)

  const [bannerData, setBannerData] = useState<RecentFilmItemType[] | undefined>(() => {
    if (savedBannerData) return JSON.parse(savedBannerData)
    return
  })

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const [currentBanner, setCurrentBanner] = useState<RecentFilmItemType | null>(null)

  useEffect(() => {
    if (!bannerData && data) {
      setBannerData(data.items)
      sessionStorage.setItem('bannerData', JSON.stringify(data.items))
    }
  }, [bannerData, data])

  useEffect(() => {
    if (!bannerData) return
    setCurrentIndex(Math.floor(Math.random() * bannerData.length))
  }, [bannerData])

  useEffect(() => {
    if (!bannerData) return
    setCurrentBanner(bannerData[currentIndex])
  }, [currentIndex, bannerData])

  useEffect(() => {
    if (!bannerData) return
    const autoChangeCurrentIndex = setInterval(() => {
      setCurrentIndex(Math.floor(Math.random() * bannerData.length))
    }, 8000)
    return () => clearInterval(autoChangeCurrentIndex)
  }, [bannerData])

  const handlePrev = () => {
    if (bannerData) {
      currentIndex === 0 ?
        setCurrentIndex(bannerData.length - 1) :
        setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (bannerData) {
      currentIndex === bannerData.length - 1 ?
        setCurrentIndex(0) :
        setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div className="lg:h-[700px] h-[520px] relative">
      <div
        onClick={handlePrev}
        className="absolute z-10 size-[60px] hover:bg-ct-secondary duration-200 transition-colors cursor-pointer rounded-full grid place-content-center left-2 top-1/2 -translate-y-1/2">
        <FaChevronLeft className='text-[23px] text-white' />
      </div>
      <div
        onClick={handleNext}
        className="absolute z-10 size-[60px] hover:bg-ct-secondary duration-200 transition-colors cursor-pointer rounded-full grid place-content-center right-2 top-1/2 -translate-y-1/2">
        <FaChevronRight className='text-[23px] text-white' />
      </div>
      {!bannerData ? <Loading /> : (
        <NavLink
          to={`/phim/${currentBanner?.slug}`}
          style={{
            backgroundImage:
              `radial-gradient(circle, rgba(15,15,15,0.2) 0%, rgba(15,15,15,1) 92%), url(${currentBanner?.thumb_url})`
          }}
          className="h-full bg-top bg-cover relative flex items-end"
        >
          <div className="h-[90%] w-full flex px-10">
            <div className="md:basis-3/5 basis-full text-white mt-[90px] xl:pl-10 xs:pl-4 pl-0">
              <div className="sms:p-10 p-2 rounded">
                <div className="lg:text-7xl xs:text-5xl text-4xl font-bold mb-6 line-clamp-3">{currentBanner?.name}</div>
                <div className="bg-ct-highlight-color text-ct-primary text-xl font-semibold w-max max-w-[275px] px-2 py-0.5 mb-2 line-clamp-1">{currentBanner?.origin_name}</div>
                <div className="bg-blue-500 px-2 text-ct-primary py-0.5 w-max font-bold">{currentBanner?.year}</div>
              </div>
            </div>
            <div className="md:flex hidden items-end basis-2/5">
              <div
                style={{
                  backgroundImage:
                    `linear-gradient(rgba(15, 15, 15, 0.1) 0%, #0f0f0f 100%), url(${currentBanner?.poster_url})`
                }}
                className="w-[90%] max-w-[480px] h-[90%] bg-top bg-cover rounded-t-2xl relative"
              >
                <div
                  className="absolute cursor-pointer lg:-right-9 -right-8 top-16 lg:size-[80px] size-[62px] rounded-full bg-red-600 grid place-content-center scale-100 hover:scale-110 duration-300"
                >
                  <div className="text-white text-3xl ml-1">
                    <FaPlay />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      )}
    </div>
  )
}
