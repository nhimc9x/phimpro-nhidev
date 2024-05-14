import placeholderImg from '~/assets/placeholder_img.jpg'

export const SkeletonCard = () => {
  return (
    <div className="h-[400px] w-full flex flex-col rounded animate-pulse">
      <div
        style={{ backgroundImage: `url(${placeholderImg})` }}
        className="flex-1 flex items-end m-3 bg-top bg-cover rounded-t-sm overflow-hidden bg-ct-secondary">
        <div className="flex gap-1 mb-2 ml-2">
          <div className="h-7 w-16 bg-ct-secondary rounded-sm"></div>
          <div className="h-7 w-16 bg-ct-secondary rounded-sm"></div>
          <div className="h-7 w-16 bg-ct-secondary rounded-sm"></div>
        </div>
      </div>
      <div className="h-[80px] px-3">
        <div className="w-full h-[40px] bg-ct-secondary rounded-sm"></div>
      </div>
    </div>
  )
}
