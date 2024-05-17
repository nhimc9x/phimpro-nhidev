import { useCallback, useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce';

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}

export const CustomPagination = ({ setPage, page }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const totalPages = 100
  const [checker, setChecker] = useState<string>('')

  const scrollToTop = useCallback(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const [currentPageDebounce] = useDebounce(currentPage, 600)

  useEffect(() => {
    if (typeof (currentPageDebounce) !== 'number' || Number.isNaN(currentPageDebounce)) setChecker('Vui lòng nhập số')
    else if (currentPageDebounce < 1 || currentPageDebounce > totalPages) setChecker(`Số trang từ 1 đến ${totalPages}`)
    else {
      setChecker('')
      setPage(currentPageDebounce)
      scrollToTop()
    }
  }, [currentPageDebounce, scrollToTop, setPage])

  const handlePrevPage = () => {
    currentPage === 1 ?
      setCurrentPage(totalPages) :
      setCurrentPage(currentPage - 1)
  }

  const handlePNextPage = () => {
    currentPage === totalPages ?
      setCurrentPage(1) :
      setCurrentPage(currentPage + 1)
  }

  return (
    <div className="w-max mx-auto ">
      <div className="flex gap-4">
        <div
          onClick={handlePrevPage}
          className="bg-ct-secondary rounded-sm cursor-pointer font-semibold tracking-wider active:scale-110 text-lg hover:text-ct-highlight-color px-4 py-1 text-ct-text-color">{'<'} Prev</div>
        <div className="w-[80px] text-[20px] bg-ct-text-color">
          <input
            className='w-full h-full text-center rounded outline-none border-0 font-semibold placeholder:font-medium placeholder:text-ct-secondary placeholder:opacity-80'
            type="number"
            onChange={e => setCurrentPage(parseInt(e.target.value))}
            value={currentPage}
            placeholder='Page'
          />
        </div>
        <div
          onClick={handlePNextPage}
          className="bg-ct-secondary rounded-sm cursor-pointer font-semibold tracking-wider active:scale-110 text-lg hover:text-ct-highlight-color px-4 py-1 text-ct-text-color">Next {'>'}</div>
      </div>
      <div className="w-max mx-auto">
        <div className="text-red-500 my-3 tracking-wider">{checker}</div>
      </div>
    </div>
  )
}