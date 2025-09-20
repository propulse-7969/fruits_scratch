import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fonts } from '../fonts'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Oranges')
  const [viewMode, setViewMode] = useState('calendar') // 'calendar' or 'map'

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.set(document.documentElement, { backgroundColor: '#fcde47' })

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
      minHeight: '100vh', 
      display: 'flex', 
      backgroundColor: '#fcde47',
      padding: '2rem'
    }}>
      {/* Left Sidebar - Product Selector */}
      <div style={{
        width: '300px',
        marginRight: '2rem',
        flexShrink: 0,
        paddingTop: '180px'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          height: 'fit-content'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#08304a',
            marginBottom: '1.5rem',
            textAlign: 'center',
            fontFamily: fonts.secondary
          }}>
            Products
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {productCategories.map((category) => (
              <div
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: selectedCategory === category.name ? '#f97316' : 'transparent',
                  color: selectedCategory === category.name ? '#fcde47' : '#08304a',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  fontFamily: fonts.secondary
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category.name) {
                    e.currentTarget.style.backgroundColor = 'rgba(8, 48, 74, 0.1)'
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
        paddingTop: '88px'
      }}>
        {/* Header with View Mode Buttons, Centered Title and Download Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
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
                border: '2px solid #08304a',
                background: viewMode === 'calendar' ? '#08304a' : 'rgba(255, 255, 255, 0.9)',
                color: viewMode === 'calendar' ? '#fff' : '#08304a',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                fontFamily: fonts.secondary,
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f97316'
                e.currentTarget.style.borderColor = '#f97316'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = viewMode === 'calendar' ? '#08304a' : 'rgba(255, 255, 255, 0.9)'
                e.currentTarget.style.borderColor = '#08304a'
                e.currentTarget.style.color = viewMode === 'calendar' ? '#fff' : '#08304a'
              }}
            >
              View Calendar
            </button>
            <button
              onClick={() => setViewMode('map')}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: '2px solid #08304a',
                background: viewMode === 'map' ? '#08304a' : 'rgba(255, 255, 255, 0.9)',
                color: viewMode === 'map' ? '#fff' : '#08304a',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '600',
                fontFamily: fonts.secondary,
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f97316'
                e.currentTarget.style.borderColor = '#f97316'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = viewMode === 'map' ? '#08304a' : 'rgba(255, 255, 255, 0.9)'
                e.currentTarget.style.borderColor = '#08304a'
                e.currentTarget.style.color = viewMode === 'map' ? '#fff' : '#08304a'
              }}
            >
              View Map
            </button>
          </div>

          {/* Centered Title */}
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#f97316',
            margin: 0,
            fontFamily: fonts.secondary,
            textAlign: 'center',
            flex: 2
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
                background: 'rgba(255, 255, 255, 0.9)',
                border: '2px solid #08304a',
                color: '#08304a',
                padding: '6px 12px',
                borderRadius: '15px',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: fonts.secondary,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f97316'
                e.currentTarget.style.borderColor = '#f97316'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'
                e.currentTarget.style.borderColor = '#08304a'
                e.currentTarget.style.color = '#08304a'
              }}
            >
              Download {selectedCategory} Calendar
            </button>
            <button 
              style={{
                background: '#08304a',
                border: '2px solid #08304a',
                color: '#fff',
                padding: '6px 12px',
                borderRadius: '15px',
                fontSize: '0.8rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: fonts.secondary,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f97316'
                e.currentTarget.style.borderColor = '#f97316'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#08304a'
                e.currentTarget.style.borderColor = '#08304a'
                e.currentTarget.style.color = '#fff'
              }}
            >
              Download All Calendars
            </button>
          </div>
        </div>

        {/* Calendar/Map Container */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '600px'
        }}>
          {/* Placeholder for calendar/map content */}
          <div style={{
            textAlign: 'center',
            color: '#08304a',
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
            <div style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.7 }}>
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
            background: 'linear-gradient(45deg, #fcde47, #f97316)',
            borderRadius: '50%',
            opacity: 0.1
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            width: '40px',
            height: '40px',
            background: 'linear-gradient(45deg, #d9f99d, #8A9A7A)',
            borderRadius: '50%',
            opacity: 0.1
          }} />
        </div>

      </div>
    </main>
  )
}


