import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { CardFilmItem } from './CardFilmItem/CardFilmItem'
// import './styles.css'

import mockData from '~/MockData/mock_data.json'

type DataBannerType = {
  modified: { time: string };
  name: string;
  origin_name: string;
  poster_url: string;
  slug: string;
  thumb_url: string;
  year: number;
  _id: string;
}

export const Slider = () => {

  const dataApis: DataBannerType[] = mockData.items

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {dataApis.map(data =>
          <SwiperSlide key={data._id}>
            <CardFilmItem name={data.name} poster={data.poster_url} year={data.year} />
          </SwiperSlide>
        )}
      </Swiper>
    </>
  )
}
