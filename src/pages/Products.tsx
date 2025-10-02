import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fonts } from '../fonts'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Oranges')
  const [viewMode, setViewMode] = useState('calendar') // 'calendar' or 'map'

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.set(document.documentElement, { backgroundColor: '#093729' })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  // Product categories with emojis
  const productCategories = [
    { name: 'Oranges', emoji: '🍊' },
    { name: 'Apples & Pears', emoji: '🍎' },
    { name: 'Table Grapes', emoji: '🍇' },
    { name: 'Avocados', emoji: '🥑' },
    { name: 'Peaches & Plums', emoji: '🍑' },
    { name: 'Cherries', emoji: '🍒' },
    { name: 'Pomegranates', emoji: '🍎' },
    { name: 'Lychees', emoji: '🍒' },
    { name: 'Strawberries', emoji: '🍓' }
  ]

  return (
    <main id="products" style={{ 
      height: '100vh',
      minHeight: '100vh',
      maxHeight: '100vh',
      display: 'flex', 
      backgroundColor: '#093729',
      padding: '0 2rem',
      overflow: 'hidden'
    }}>
      {/* Left Sidebar - Product Selector */}
      <div style={{
        width: '300px',
        marginRight: '2rem',
        flexShrink: 0,
        paddingTop: 'calc(88px + 120px)'
      }}>
        <div style={{
          background: 'rgba(9, 55, 41, 0.35)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '1.5rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(214, 229, 52, 0.25)',
          height: 'fit-content'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#d6e534',
            marginBottom: '1rem',
            textAlign: 'center',
            fontFamily: fonts.secondary,
            letterSpacing: '0.01em'
          }}>
            Products
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {productCategories.map((category) => (
              <div
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: selectedCategory === category.name ? 'rgba(214, 229, 52, 0.15)' : 'transparent',
                  color: selectedCategory === category.name ? '#d6e534' : '#a1c171',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  fontFamily: fonts.secondary,
                  border: selectedCategory === category.name ? '1px solid rgba(214, 229, 52, 0.45)' : '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category.name) {
                    e.currentTarget.style.backgroundColor = 'rgba(214, 229, 52, 0.08)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category.name) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{category.emoji}</span>
                <span>{category.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Right Content Area - Calendar/Map */}
      <div style={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '88px',
        height: 'calc(100vh - 88px)'
      }}>
        {/* Header with View Mode Buttons, Centered Title and Download Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '28px',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* View Mode Buttons - Left */}
          <div style={{ 
            display: 'flex', 
            gap: '0.5rem',
            flex: 1
          }}>
            <button
              onClick={() => setViewMode('calendar')}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: viewMode === 'calendar' ? '2px solid #d6e534' : '2px solid rgba(214, 229, 52, 0.5)',
                background: viewMode === 'calendar' ? '#d6e534' : 'rgba(214, 229, 52, 0.12)',
                color: viewMode === 'calendar' ? '#093729' : '#d6e534',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                fontFamily: fonts.secondary,
                transition: 'all 0.3s ease',
                boxShadow: viewMode === 'calendar' ? '0 4px 14px rgba(214, 229, 52, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.2)',
                letterSpacing: '0.01em',
                transform: 'translateZ(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#fee832'
                e.currentTarget.style.borderColor = '#fee832'
                e.currentTarget.style.color = '#093729'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = viewMode === 'calendar' ? '#d6e534' : 'rgba(214, 229, 52, 0.12)'
                e.currentTarget.style.borderColor = viewMode === 'calendar' ? '#d6e534' : 'rgba(214, 229, 52, 0.5)'
                e.currentTarget.style.color = viewMode === 'calendar' ? '#093729' : '#d6e534'
                e.currentTarget.style.transform = 'none'
              }}
              onFocus={(e) => { e.currentTarget.style.boxShadow = '0 0 0 3px rgba(214, 229, 52, 0.5), 0 4px 14px rgba(214, 229, 52, 0.3)' }}
              onBlur={(e) => { e.currentTarget.style.boxShadow = viewMode === 'calendar' ? '0 4px 14px rgba(214, 229, 52, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.2)' }}
            >
              View Calendar
            </button>
            <button
              onClick={() => setViewMode('map')}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: viewMode === 'map' ? '2px solid #d6e534' : '2px solid rgba(214, 229, 52, 0.5)',
                background: viewMode === 'map' ? '#d6e534' : 'rgba(214, 229, 52, 0.12)',
                color: viewMode === 'map' ? '#093729' : '#d6e534',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                fontFamily: fonts.secondary,
                transition: 'all 0.3s ease',
                boxShadow: viewMode === 'map' ? '0 4px 14px rgba(214, 229, 52, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.2)',
                letterSpacing: '0.01em',
                transform: 'translateZ(0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#fee832'
                e.currentTarget.style.borderColor = '#fee832'
                e.currentTarget.style.color = '#093729'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = viewMode === 'map' ? '#d6e534' : 'rgba(214, 229, 52, 0.12)'
                e.currentTarget.style.borderColor = viewMode === 'map' ? '#d6e534' : 'rgba(214, 229, 52, 0.5)'
                e.currentTarget.style.color = viewMode === 'map' ? '#093729' : '#d6e534'
                e.currentTarget.style.transform = 'none'
              }}
              onFocus={(e) => { e.currentTarget.style.boxShadow = '0 0 0 3px rgba(214, 229, 52, 0.5), 0 4px 14px rgba(214, 229, 52, 0.3)' }}
              onBlur={(e) => { e.currentTarget.style.boxShadow = viewMode === 'map' ? '0 4px 14px rgba(214, 229, 52, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.2)' }}
            >
              View Map
            </button>
          </div>

          {/* Centered Title */}
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#d6e534',
            margin: 0,
            fontFamily: fonts.secondary,
            textAlign: 'center',
            flex: 2,
            letterSpacing: '0.01em'
          }}>
            {selectedCategory}
          </h2>

          {/* Download Buttons - Right */}
          <div style={{ 
            display: 'flex', 
            gap: '0.5rem',
            flex: 1,
            justifyContent: 'flex-end'
          }}>
            <button 
              style={{
                background: 'rgba(214, 229, 52, 0.12)',
                border: '2px solid rgba(214, 229, 52, 0.5)',
                color: '#d6e534',
                padding: '6px 12px',
                borderRadius: '15px',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: fonts.secondary,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(214, 229, 52, 0.22)'
                e.currentTarget.style.borderColor = 'rgba(214, 229, 52, 0.8)'
                e.currentTarget.style.color = '#fee832'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(214, 229, 52, 0.12)'
                e.currentTarget.style.borderColor = 'rgba(214, 229, 52, 0.5)'
                e.currentTarget.style.color = '#d6e534'
              }}
            >
              Download {selectedCategory} Calendar
            </button>
            <button 
              style={{
                background: '#093729',
                border: '2px solid rgba(214, 229, 52, 0.5)',
                color: '#d6e534',
                padding: '6px 12px',
                borderRadius: '15px',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: fonts.secondary,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(9, 55, 41, 0.65)'
                e.currentTarget.style.borderColor = 'rgba(214, 229, 52, 0.8)'
                e.currentTarget.style.color = '#fee832'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#093729'
                e.currentTarget.style.borderColor = 'rgba(214, 229, 52, 0.5)'
                e.currentTarget.style.color = '#d6e534'
              }}
            >
              Download All Calendars
            </button>
          </div>
        </div>

        {/* Calendar/Map Container */}
        <div style={{
          background: 'rgba(9, 55, 41, 0.35)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(214, 229, 52, 0.25)',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 0,
          maxHeight: 'calc(100% - 30px)',
          marginBottom: '30px'
        }}>
          {/* Placeholder for calendar/map content */}
          <div style={{
            textAlign: 'center',
            color: '#a1c171',
            fontFamily: fonts.tertiary,
            fontSize: '1.2rem',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
              {viewMode === 'calendar' ? '📅' : '🗺️'}
            </div>
            <div>
              {viewMode === 'calendar' 
                ? `Calendar for ${selectedCategory} will be displayed here`
                : `Map for ${selectedCategory} will be displayed here`
              }
            </div>
            <div style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.85 }}>
              Interactive {viewMode} coming soon
            </div>
          </div>

          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            background: 'linear-gradient(45deg, rgba(214,229,52,0.6), rgba(161,193,113,0.4))',
            borderRadius: '50%',
            opacity: 0.15
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            width: '40px',
            height: '40px',
            background: 'linear-gradient(45deg, rgba(214,229,52,0.5), rgba(9,55,41,0.7))',
            borderRadius: '50%',
            opacity: 0.15
          }} />
        </div>

      </div>
    </main>
  )
}


