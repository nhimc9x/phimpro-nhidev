import { NavLink } from 'react-router-dom'

type Props = {
  title: string;
  to: string
}
export const MenuItem = ({ title, to }: Props) => {
  return (
    <NavLink
      to={to}
      className={
        ({ isActive }) =>
          isActive ?
            '[text-shadow:_0_0_4px_#ffd3338f] text-ct-highlight-color' :
            'hover:[text-shadow:_0_0_4px_#ffd3338f] hover:text-ct-highlight-color'
      }
    >
      {title}
    </NavLink>
  )
}
