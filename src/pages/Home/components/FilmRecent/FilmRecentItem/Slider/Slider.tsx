import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { CardFilmItem } from './CardFilmItem/CardFilmItem'
import { useGetListFilmByCategoryQuery } from '~/apis/listFilmsApi'
import { SkeletonCard } from './CardFilmItem/SkeletonCard/SkeletonCard'

export const Slider = ({ category }: { category: string }) => {

  const { data, isLoading, error } = useGetListFilmByCategoryQuery({ category: category })

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
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
