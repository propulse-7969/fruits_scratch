import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/events', label: 'Events' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <ul className="navbar-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink 
                to={to} 
                className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}


