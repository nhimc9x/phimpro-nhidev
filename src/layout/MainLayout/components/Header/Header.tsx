import phimProLogo from '~/assets/phimpro_logo.png'
import { Navbar } from './Navbar/Navbar'
import { useEffect, useRef, useState } from 'react'
import { LuMenu } from 'react-icons/lu'
import { IoClose } from 'react-icons/io5'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

export const Header = () => {

  const headerRef = useRef<HTMLDivElement>(null)
  const navBarRef = useRef<HTMLDivElement>(null)

  const location = useLocation()

  const [showNavBar, setShowNavBar] = useState(false)

  useEffect(() => {
    setShowNavBar(false)
  }, [location])

  const changeBackGroundColorWhileScroll = () => {
    if (headerRef.current) {
      if (window.scrollY > 100) {
        headerRef.current.style.backgroundColor = '#272727'
      } else {
        headerRef.current.style.backgroundColor = 'transparent'
      }
    }
  }

  const handleDocumentClick = (e: MouseEvent) => {
    if (navBarRef.current && !navBarRef.current.contains(e.target as Node | null)) {
      setShowNavBar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackGroundColorWhileScroll)
    window.addEventListener('click', handleDocumentClick)
    return () => {
      window.removeEventListener('scroll', changeBackGroundColorWhileScroll)
      window.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return (
    <div ref={headerRef} className="fixed top-0 left-0 right-0 z-[999]">
      <div className="max-w-[1600px] w-full mx-auto h-[70px] flex justify-between items-center min-[840px]:px-8 px-4">
        <a href='' className="h-[60px]">
          <img className='h-full' src={phimProLogo} alt="" />
        </a>

        <div className="md:block hidden">
          <Navbar />
        </div>

        <div
          ref={navBarRef}
          className="md:hidden block">
          <div
            onClick={() => setShowNavBar(true)}
            className="text-4xl h-full w-[72px] text-white grid place-content-center"
          >
            <LuMenu />
          </div>
          <div
            className={clsx(
              'bg-ct-secondary fixed z-[999] top-0 bottom-0 w-[280px] md:static md:bg-transparent md:w-auto duration-300',
              showNavBar ? 'right-0' : '-right-[300px]'
            )}>
            <div
              onClick={() => setShowNavBar(false)}
              className="absolute h-[70px] w-[52px] grid place-content-center text-4xl text-white hover:text-red-500 top-0 left-0"
            >
              <IoClose />
            </div>
            <Navbar />
          </div>
        </div>

      </div>
    </div>
  )
}

