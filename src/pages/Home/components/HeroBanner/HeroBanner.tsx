import { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import { useGetRecentUpdateFlimByPageQuery } from '../../../../apis/recentUpdateFilmApi'
import { RecentFilmItemType } from '~/types/type'
import loadingGif from '~/assets/loadlurk-loading.gif'
import { Loading } from '~/components/Loading/Loading'

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
    <div
      style={{
        backgroundImage:
          `radial-gradient(circle, rgba(15,15,15,0.2) 0%, rgba(15,15,15,1) 92%), url(${currentBanner?.thumb_url})`
      }}
      className="h-[700px] bg-top bg-cover relative flex items-end"
    >
      {!bannerData ? <Loading /> : (
        <>
          <div
            onClick={handlePrev}
            className="absolute size-[60px] hover:bg-ct-secondary duration-200 transition-colors cursor-pointer rounded-full grid place-content-center left-2 top-1/2 -translate-y-1/2">
            <FaChevronLeft className='text-[23px] text-white' />
          </div>
          <div
            onClick={handleNext}
            className="absolute size-[60px] hover:bg-ct-secondary duration-200 transition-colors cursor-pointer rounded-full grid place-content-center right-2 top-1/2 -translate-y-1/2">
            <FaChevronRight className='text-[23px] text-white' />
          </div>

          <div className="h-[600px] w-full flex gap-14 px-10">

            <div className="flex-1 text-white mt-[80px] pl-10">
              <div className="px-8 py-12 rounded">
                <div className="text-7xl font-bold mb-6 line-clamp-3">{currentBanner?.name}</div>
                <div className="bg-ct-highlight-color text-ct-primary text-xl font-semibold px-2 py-0.5 w-max mb-2 line-clamp-1">{currentBanner?.origin_name}</div>
                <div className="bg-blue-500 px-2 text-ct-primary py-0.5 w-max font-bold">{currentBanner?.year}</div>
              </div>
            </div>

            <div className="flex items-end basis-[600px]">
              <div
                style={{
                  backgroundImage:
                    `linear-gradient(rgba(15, 15, 15, 0.1) 0%, #0f0f0f 100%), url(${currentBanner?.poster_url})`
                }}
                className="w-[500px] h-[580px] bg-top bg-cover rounded-t-2xl relative"
              >
                <div className="absolute cursor-pointer -right-9 top-16 size-[80px] rounded-full bg-red-600 grid place-content-center scale-100 hover:scale-110 duration-300">
                  <div className="text-white text-3xl ml-1">
                    <FaPlay />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </>
      )}

    </div>
  )
}
