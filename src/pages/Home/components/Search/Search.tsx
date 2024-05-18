import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Search = () => {

  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearch = () => {
    if (searchTerm.trim() === '') return
    navigate(`/tim-kiem?keyword=${searchTerm}`)
  }

  return (
    <div className="">
      <div className="text-white text-3xl capitalize">Tìm kiếm</div>
      <form className="flex px-10 gap-3 mt-6">
        <input
          className="flex-1 bg-ct-secondary text-xl text-ct-text-color px-4 py-2 outline-none placeholder:text-gray-600"
          type="search"
          placeholder='Nhập tên phim cần tìm...'
          value={searchTerm}
          required
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div
          onClick={handleSearch}
          className="text-lg text-ct-primary bg-ct-highlight-color px-4 py-2 font-semibold active:scale-110 hover:scale-105 cursor-pointer"
        >
          Tìm kiếm
        </div>
      </form>
    </div>
  )
}
