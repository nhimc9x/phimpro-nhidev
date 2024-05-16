import loadingGif from '~/assets/loadlurk-loading.gif'

export const Loading = () => {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 grid place-content-center bg-ct-primary/90">
      <div className="flex flex-col items-center">
        <img className="size-24 animate-bounce" src={loadingGif} alt="" />
        <div className="text-white font-bold text-2xl tracking-widest italic animate-pulse">Loading...</div>
      </div>
    </div>
  )
}
