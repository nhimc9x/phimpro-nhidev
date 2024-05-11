import phimProLogo from '~/assets/phimpro_logo.png'
import { Navbar } from './Navbar/Navbar'
import { useEffect, useRef } from 'react'

export const Header = () => {

  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const changeBackGroundColorWhileScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 100) {
          headerRef.current.style.backgroundColor = '#272727'
        } else {
          headerRef.current.style.backgroundColor = 'transparent'
        }
      }
    }
    window.addEventListener('scroll', changeBackGroundColorWhileScroll)
    return () => {
      window.removeEventListener('scroll', changeBackGroundColorWhileScroll)
    }
  }, [])

  return (
    <div ref={headerRef} className="fixed top-0 left-0 right-0 z-[999]">
      <div className="max-w-[1600px] w-full mx-auto h-[70px] flex justify-between items-center px-8">
        <a href='' className="h-[60px]">
          <img className='h-full' src={phimProLogo} alt="" />
        </a>

        <Navbar />

      </div>
    </div>
  )
}

