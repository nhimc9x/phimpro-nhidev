import clsx from 'clsx'
import { Episodes, ServerData } from '~/types/type'

type Props = {
  episodeData?: Episodes;
  currentEpisode?: ServerData;
  setCurrentEpisode: React.Dispatch<React.SetStateAction<ServerData | undefined>>;
  // eslint-disable-next-line no-unused-vars
  handleChooseEpisode: (data: ServerData) => void
}

export const ListEpisode = ({ episodeData, currentEpisode, handleChooseEpisode }: Props) => {

  return (
    <div>
      <div className="text-white text-3xl my-6 capitalize">Danh sách tập</div>
      <div className="px-12 flex flex-wrap gap-4 text-ct-text-color">
        {episodeData?.server_data.map((data) => (
          <div
            key={data.slug}
            onClick={() => handleChooseEpisode(data)}
            className={clsx(
              'h-12 w-24 rounded bg-ct-secondary grid place-content-center text-xl font-medium',
              'hover:text-ct-highlight-color duration-200 cursor-pointer',
              data.slug === currentEpisode?.slug && 'text-ct-highlight-color'
            )}
          >
            {data.name}
          </div>
        ))}
      </div>
    </div>
  )
}
