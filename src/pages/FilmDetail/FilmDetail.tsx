import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetFilmDetailBySlugQuery } from '~/apis/filmDetailApi'
import { Loading } from '~/components/Loading/Loading'
import { ServerData } from '~/types/type'
import { MoviePlayer } from './components/MoviePlayer/MoviePlayer'
import { FilmRecentItem } from '../Home/components/FilmRecent/FilmRecentItem/FilmRecentItem'
import { InfoFilm } from './components/InfoFilm/InfoFilm'
import { ListEpisode } from './components/ListEpisode/ListEpisode'
import fomatTypeToCategory from '~/utils/fomatTypeToCategory'

export const FilmDetail = () => {

  const { slugFilm } = useParams()

  const { data, isFetching } = useGetFilmDetailBySlugQuery(slugFilm || '')

  const [currentEpisode, setCurrentEpisode] = useState<ServerData>()

  useEffect(() => {
    setCurrentEpisode(undefined)
  }, [data])

  if (isFetching) return (
    <div className="h-dvh">
      <Loading />
    </div>
  )

  return (
    <div className="sms:px-8 px-6">
      <InfoFilm filmData={data?.movie} />
      <div className="h-[2px] bg-ct-secondary"></div>
      <div className="my-8">
        <MoviePlayer currentEpisode={currentEpisode} />
        <ListEpisode
          episodeData={data?.episodes[0]}
          currentEpisode={currentEpisode}
          setCurrentEpisode={setCurrentEpisode}
        />
      </div>
      <div className="h-[2px] bg-ct-secondary"></div>
      <div className="my-8">
        <FilmRecentItem title='Phim đề xuất' category={fomatTypeToCategory(data?.movie.type) || 'phim-le'} />
      </div>
    </div>
  )
}
