import { FaFacebookSquare } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaGooglePlusSquare } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className="px-2 py-10 w-full max-w-[1600px] mx-auto text-center bg-ct-primary">
      <div className="flex items-center justify-center gap-1 mb-2">
        <div className="h-[1px] bg-ct-secondary w-full mr-2"></div>
        <div className="text-2xl tracking-widest text-ct-highlight-color uppercase font-bold">PhimPro</div>
        <div className="h-[1px] bg-ct-secondary w-full ml-2"></div>
      </div>
      <div className="flex justify-center items-center gap-4 mb-6">
        <a href="https://nhideveloper.id.vn" className="text-ct-text-color text-3xl hover:text-ct-highlight-color transition-all duration-200">
          <FaFacebookSquare />
        </a>
        <a href="https://github.com/nhimc9x" className="text-ct-text-color text-3xl hover:text-ct-highlight-color transition-all duration-200">
          <FaGithubSquare />
        </a>
        <a href="mailto:nhicomputer77@gmail.com" className="text-ct-text-color text-3xl hover:text-ct-highlight-color transition-all duration-200">
          <FaGooglePlusSquare />
        </a>
      </div>
      <div className="text-sm text-ct-text-color font-light tracking-wide">
        Copyright ©2024 All rights reserved | This website is made with by
        &#10084; <a href="https://nhideveloper.id.vn" className="text-ncs-active-color">Nhidev</a>
      </div>
    </div>
  )
}
