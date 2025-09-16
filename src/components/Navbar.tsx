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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Desktop Navigation */}
        <ul className="navbar-links desktop-nav">
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

        {/* Mobile Hamburger Menu */}
        <div className="mobile-nav">
          <button 
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            style={{
              background: 'rgba(8, 48, 74, 0.9)',
              border: '2px solid white',
              minWidth: '50px',
              minHeight: '50px',
              borderRadius: '12px'
            }}
          >
            <div className="hamburger-dots">
              <span className="dot" style={{ 
                background: 'white', 
                width: '8px', 
                height: '8px',
                display: 'block',
                borderRadius: '50%'
              }}></span>
              <span className="dot" style={{ 
                background: 'white', 
                width: '8px', 
                height: '8px',
                display: 'block',
                borderRadius: '50%'
              }}></span>
              <span className="dot" style={{ 
                background: 'white', 
                width: '8px', 
                height: '8px',
                display: 'block',
                borderRadius: '50%'
              }}></span>
            </div>
          </button>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
              <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
                <ul className="mobile-menu-links">
                  {links.map(({ to, label }) => (
                    <li key={to}>
                      <NavLink 
                        to={to} 
                        className={({ isActive }) => `mobile-menu-link ${isActive ? 'active' : ''}`}
                        onClick={closeMobileMenu}
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}


