
export const Search = () => {
  return (
    <div className="">
      <div className="text-2xl font-semibold text-white tracking-wider">Tìm Kiếm</div>
      <div className="flex px-10 gap-3 mt-6">
        <input
          className="flex-1 bg-ct-secondary text-lg text-ct-text-color px-4 outline-none placeholder:text-gray-600"
          type="search"
          placeholder='Nhập tên phim cần tìm...'
        />
        <div className="text-lg text-ct-primary bg-ct-highlight-color px-4 py-1.5 font-semibold active:scale-110 cursor-pointer">Tìm kiếm</div>
      </div>
    </div>
  )
}
