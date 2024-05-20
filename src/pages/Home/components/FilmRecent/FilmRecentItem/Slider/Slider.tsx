import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { CardFilmItem } from './CardFilmItem/CardFilmItem'
import { useGetListFilmByCategoryQuery } from '~/apis/listFilmsApi'
import { SkeletonCard } from './CardFilmItem/SkeletonCard/SkeletonCard'

export const Slider = ({ category }: { category: string }) => {

  const { data, isLoading } = useGetListFilmByCategoryQuery({ category: category })

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          575: {
            slidesPerView: 2,
            spaceBetween: 8
          },
          765: {
            slidesPerView: 3,
            spaceBetween: 8
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 8
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 8
          }
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {isLoading ?
          Array.from({ length: 5 }).map((data, index) => (
            <SwiperSlide key={index}>
              <SkeletonCard />
            </SwiperSlide>
          )) :

          data?.data.items.map(data => (
            <SwiperSlide key={data._id}>
              <CardFilmItem dataFilmItem={data} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  )
}
