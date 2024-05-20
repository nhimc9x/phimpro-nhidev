import wallImg from '~/assets/wallpaper.png'
import { CardFilmPro } from '~/components/CardFilmPro/CardFilmPro'
import { Loading } from '../Loading/Loading'
import { CustomPagination } from '../CustomPagination/CustomPagination'
import { useState } from 'react'
import { useGetListFilmByCategoryQuery } from '~/apis/listFilmsApi'

export const FilmCategory = ({ category }: { category: 'phim-le' | 'phim-bo' | 'hoat-hinh' | 'tv-shows' }) => {


  const [page, setPage] = useState<number>(1)

  const { data, isFetching } = useGetListFilmByCategoryQuery({ category: category, page: page, limit: 32 })

  if (isFetching) return (
    <div className="h-dvh">
      <Loading />
    </div>
  )
  return (
    <div className="">
      <div className="relative">
        <img className="w-full h-[400px] object-cover" src={wallImg} alt="" />
        <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-radial-gradient flex items-end">
          <div className="sms:w-[80%] w-[90%] mx-auto md:mb-20 sms:mb-10 mb-4">
            <div className="md:text-6xl text-5xl text-white font-bold capitalize md:mb-6 mb-4">{data?.data.titlePage}</div>
            <div className="text-3xl text-ct-text-color leading-10">{data?.data.seoOnPage.descriptionHead}</div>
          </div>
        </div>
      </div>
      <div className="max-w-max w-full mx-auto grid xl:grid-cols-4 mdl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mdl:px-8 px-6 gap-4 mb-10">
        {data?.data.items.map(dataFilm =>
          <CardFilmPro key={dataFilm._id} dataFilmItem={dataFilm} />
        )}
      </div>
      <div className="h-20">
        <CustomPagination totalPages={data?.data.params.pagination.totalPages || 10} setPage={setPage} page={page} />
      </div>
    </div>
  )
}
