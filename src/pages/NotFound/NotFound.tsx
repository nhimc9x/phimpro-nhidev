import { NavLink } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-ct-primary">
      <div className="text-9xl font-extrabold text-white tracking-widest">404</div>
      <div className="bg-ct-highlight-color px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <NavLink
        to={'/'}
        className="text-ct-text-color mt-4 bg-ct-secondary px-4 py-1 ring-transparent
      hover:text-ct-highlight-color ring-1 hover:ring-ct-highlight-color duration-300"
      >
        Go Home
      </NavLink>
    </div>
  )
}
