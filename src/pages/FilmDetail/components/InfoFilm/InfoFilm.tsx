import { IMovieType } from '~/types/type'
import fomatCategoryToString from '~/utils/fomatCategoryToString'

type Props = {
  filmData?: IMovieType;
}

export const InfoFilm = ({ filmData }: Props) => {

  return (
    <>
      <div
        style={{
          backgroundImage:
            `radial-gradient(circle, rgba(15,15,15,0.2) 0%, rgba(15,15,15,1) 96%), url(${filmData?.thumb_url})`
        }}
        className="h-[440px] bg-right-top bg-cover text-5xl text-ct-highlight-color -mx-8">
      </div>
      <div className="flex mdl:flex-row flex-col gap-x-10">
        <div className="xs:w-[360px] w-[320px] mx-auto relative -top-36">
          <img className="w-full object-cover rounded-md" src={filmData?.poster_url} alt="" />
        </div>
        <div className="flex-1 mdl:mt-4 -mt-16 text-2xl text-ct-text-color divide-y-2 divide-ct-secondary *:py-4">
          <div className="">
            <div className="text-6xl font-bold text-white mb-3">{filmData?.name}</div>
            <div className="">{filmData?.origin_name}</div>
          </div>
          <div className="flex gap-6 flex-wrap sm:flex-nowrap">
            <div className="">Sản xuất: {filmData?.year}</div>
            <span className='w-[1px] hidden sm:block bg-ct-text-color'></span>
            <div className="">Chất lượng: {filmData?.quality}</div>
            <span className='w-[1px] hidden sm:block bg-ct-text-color'></span>
            <div className="">Ngôn ngữ: {filmData?.lang}</div>
          </div>
          <div className="">
            <div className="text-3xl text-white font-medium mb-2">Nội dung</div>
            <div className="">{filmData?.content}</div>
          </div>
          <div className="flex gap-6 flex-wrap sm:flex-nowrap">
            <div className="">Số tập: {filmData?.episode_total}</div>
            <span className='w-[1px] hidden sm:block bg-ct-text-color'></span>
            <div className="">Thời lượng: {filmData?.time}</div>
            <span className='w-[1px] hidden sm:block bg-ct-text-color'></span>
            <div className="">Tình trạng: {filmData?.episode_current}</div>
          </div>
          {filmData?.showtimes && (
            <div className="">
              <div className="">Lịch chiếu: {filmData?.showtimes}</div>
            </div>
          )}
          <div className="">
            <div className="">Thể loại: {fomatCategoryToString(filmData?.category)}</div>
          </div>
          <div className="">
            <div className="">Quốc gia: {filmData?.country[0].name}</div>
          </div>
        </div>
      </div>
    </>
  )
}
