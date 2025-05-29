import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg' 

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-[80px] shadow-md py-4">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto rounded-full" />
      </Link>
      <ul className="flex gap-6 text-gray-700">
        {['Home', 'About', 'Services', 'Hire Developer', 'Contact'].map((item) => (
          <li key={item}>
            <NavLink
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s/g, '-')}`}
              className={({ isActive }) =>
                isActive ? 'text-[#0D80F2] border-b-2 border-[#0D80F2]' : ''
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
