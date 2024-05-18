import wallImg from '~/assets/wallpaper.png'
import { CardFilmPro } from '~/components/CardFilmPro/CardFilmPro'
import { Loading } from '../Loading/Loading'
import { CustomPagination } from '../CustomPagination/CustomPagination'
import { useState } from 'react'
import { useGetListFilmByCategoryQuery } from '~/apis/listFilmsApi'

export const FilmCategory = ({ category }: { category: 'phim-le' | 'phim-bo' | 'hoat-hinh' | 'tv-shows' }) => {


  const [page, setPage] = useState<number>(1)

  const { data, isFetching, error } = useGetListFilmByCategoryQuery({ category: category, page: page, limit: 32 })

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
          <div className="w-[80%] mx-auto mb-20">
            <div className="text-6xl text-white font-bold capitalize mb-6">{data?.data.titlePage}</div>
            <div className="text-3xl text-ct-text-color leading-10">{data?.data.seoOnPage.descriptionHead}</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-6 gap-y-0 px-8 mb-10">
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
