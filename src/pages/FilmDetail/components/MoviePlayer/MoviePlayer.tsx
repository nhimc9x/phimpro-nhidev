import { ServerData } from '~/types/type'

export const MoviePlayer = ({ currentEpisode }: { currentEpisode: ServerData | undefined }) => {
  if (currentEpisode) return (
    <div className="mt-10 bg-ct-secondary aspect-video relative">
      <div className="absolute top-4 left-4 text-2xl font-light text-white">{currentEpisode.filename}</div>
      <iframe className='size-full' frameBorder='0' allowFullScreen src={currentEpisode.link_embed} />
    </div>
  )
  return
}
