import { ServerData } from '~/types/type'

type Props = {
  currentEpisode: ServerData | undefined;
  boxMoviePlayerRef:React.MutableRefObject<HTMLDivElement | null>;
}

export const MoviePlayer = ({ currentEpisode, boxMoviePlayerRef }: Props) => {
  if (currentEpisode) return (
    <div ref={boxMoviePlayerRef} className="mt-10 bg-ct-secondary aspect-video relative">
      <div className="sms:block hidden absolute top-4 left-4 mdl:text-2xl text-xl font-light text-white">{currentEpisode.filename}</div>
      <iframe className='size-full' frameBorder='0' allowFullScreen src={currentEpisode.link_embed} />
    </div>
  )
  return
}
