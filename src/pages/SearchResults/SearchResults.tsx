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
        className="mt-[120px] max-w-max w-full mb-10 px-6 text-3xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-ct-highlight-color to-blue-500 relative
        after:absolute after:left-6 after:top-[calc(100%+4px)] after:right-6 after:h-[2px] after:bg-gradient-to-r after:from-ct-highlight-color after:to-blue-500 "
      >
        Kết quả tìm kiếm cho từ khóa: {keyword}
      </div>

      {data?.data.items.length ? (
        <div className="max-w-max w-full mx-auto grid xl:grid-cols-4 mdl:grid-cols-3 sm:grid-cols-2 grid-cols-1 mdl:px-8 px-6 gap-4 mb-10">
          {data.data.items.map(dataFilm =>
            <CardFilmPro key={dataFilm._id} dataFilmItem={dataFilm} />
          )}
        </div>
      ) : (
        <div className="h-[50dvh] flex flex-col items-center justify-center text-ct-text-color font-semibold text-xl">
          <LuSearchX className="text-6xl mb-4" />
          <div className="mb-2">Không tìm thấy kết quả</div>
          <div className="">Bạn vui lòng nhập từ khóa khác</div>
        </div>
      )}
    </div>
  )
}
