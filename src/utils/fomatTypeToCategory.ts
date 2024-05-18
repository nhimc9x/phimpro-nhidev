export default (type?: string) => {
  switch (type) {
  case 'single':
    return 'phim-le'
  case 'series':
    return 'phim-bo'
  case 'hoathinh':
    return 'hoat-hinh'
  case 'tvshows':
    return 'tv-shows'
  default:
    return ''
  }
}
