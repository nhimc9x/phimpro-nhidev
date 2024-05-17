import { useLocation } from 'react-router-dom'
import { useSearchFilmByKeywordQuery } from '~/apis/searchFilmApi'
import { CardFilmPro } from '~/components/CardFilmPro/CardFilmPro'
import { Loading } from '~/components/Loading/Loading'
import { LuSearchX } from 'react-icons/lu'

export const SearchResults = () => {

  const query = new URLSearchParams(useLocation().search)
  const keyword = query.get('keyword')

  const { data, isLoading, error } = useSearchFilmByKeywordQuery({ keyword: keyword || '' })

  if (isLoading) return (
    <div className="h-dvh">
      <Loading />
    </div>
  )

  return (
    <div className="">
      <div
        className="mt-[120px] w-max mb-10 mx-4 text-3xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-ct-highlight-color to-blue-500 relative
        after:absolute after:left-0 after:top-[calc(100%+4px)] after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-ct-highlight-color after:to-blue-500 "
      >
        Kết quả tìm kiếm cho từ khóa: {keyword}
      </div>

      {data?.data.items.length ? (
        <div className="grid grid-cols-4 gap-x-3 gap-y-0 px-8 mb-10">
          {data.data.items.map(dataFilm =>
            <CardFilmPro key={dataFilm._id} dataFilmItem={dataFilm} />
          )}
        </div>
      ) : (
        <div className="h-[360px] flex flex-col items-center justify-center text-ct-text-color font-semibold text-xl">
          <LuSearchX className="text-6xl mb-4" />
          <div className="mb-2">Không tìm thấy kết quả</div>
          <div className="">Bạn vui lòng nhập từ khóa khác</div>
        </div>
      )}
    </div>
  )
}
