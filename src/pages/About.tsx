import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fonts } from '../fonts'

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.set(document.documentElement, { backgroundColor: '#093729' })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <main style={{ 
      minHeight: '100vh',
      backgroundColor: '#093729',
      padding: '6rem 2rem 4rem',
      color: '#a1c171'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem'
      }}>
        
        {/* Hero Section */}
        <section style={{
          textAlign: 'center',
          padding: '2rem 0'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 'bold',
            color: '#d6e534',
            fontFamily: fonts.primary,
            marginBottom: '1rem',
            letterSpacing: '0.02em'
          }}>
            About P.R. Agri Fresh
          </h1>
          <div style={{
            width: '100px',
            height: '4px',
            backgroundColor: '#d6e534',
            margin: '0 auto 2rem',
            borderRadius: '2px'
          }} />
          <p style={{
            fontSize: '1.5rem',
            color: '#b0bd22',
            fontFamily: fonts.secondary,
            fontWeight: '600',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.4'
          }}>
            Bringing the finest fruits from farm to your table
          </p>
        </section>

        {/* Main Content */}
        <section style={{
          display: 'grid',
          gap: '3rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          alignItems: 'start'
        }}>
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{
              background: 'rgba(9, 55, 41, 0.35)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(214, 229, 52, 0.25)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#d6e534',
                fontFamily: fonts.secondary,
                marginBottom: '1.5rem',
                letterSpacing: '0.01em'
              }}>
                Our Story
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#a1c171',
                fontFamily: fonts.tertiary,
                marginBottom: '1.5rem'
              }}>
                At <strong style={{ color: '#d6e534', fontWeight: 'bold' }}>P.R. Agri Fresh</strong>, we believe that nothing compares to the joy of indulging in fresh, juicy fruits that are packed with flavor and nutrients. Based in <strong style={{ color: '#b0bd22' }}>Mumbai</strong>, we source a wide variety of fruits, ensuring that every bite brings you the perfect balance of taste and goodness.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#a1c171',
                fontFamily: fonts.tertiary
              }}>
                From <strong style={{ color: '#d6e534' }}>Oranges</strong> to <strong style={{ color: '#d6e534' }}>Apples</strong>, <strong style={{ color: '#d6e534' }}>Pears</strong>, <strong style={{ color: '#d6e534' }}>Avocados</strong>, <strong style={{ color: '#d6e534' }}>Grapes</strong>, and more, we bring the best of nature directly to your table.
              </p>
            </div>

            <div style={{
              background: 'rgba(9, 55, 41, 0.35)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(214, 229, 52, 0.25)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#d6e534',
                fontFamily: fonts.secondary,
                marginBottom: '1.5rem',
                letterSpacing: '0.01em'
              }}>
                Our Commitment
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#a1c171',
                fontFamily: fonts.tertiary,
                marginBottom: '1.5rem'
              }}>
                Our passion for <strong style={{ color: '#d6e534', fontWeight: 'bold' }}>high-quality produce</strong> drives us to carefully select each fruit from trusted farms across India, ensuring that you receive only the finest. We are committed to <strong style={{ color: '#b0bd22' }}>sustainability</strong>, with a focus on conserving water and energy at every step—from the farm to the shelf.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#a1c171',
                fontFamily: fonts.tertiary
              }}>
                Our fruits are <strong style={{ color: '#d6e534' }}>handpicked at their peak ripeness</strong>, ensuring the highest quality and freshest flavors.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{
              background: 'rgba(9, 55, 41, 0.35)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(214, 229, 52, 0.25)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#d6e534',
                fontFamily: fonts.secondary,
                marginBottom: '1.5rem',
                letterSpacing: '0.01em'
              }}>
                Farm-to-Table Freshness
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#a1c171',
                fontFamily: fonts.tertiary,
                marginBottom: '1.5rem'
              }}>
                Every piece of fruit we deliver is carefully packed and transported using <strong style={{ color: '#d6e534' }}>state-of-the-art facilities</strong>, ensuring that it reaches you in perfect condition. Our fruits are more than just a snack—they are a way to experience the best that nature has to offer.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#a1c171',
                fontFamily: fonts.tertiary
              }}>
                Bursting with <strong style={{ color: '#b0bd22' }}>natural sweetness</strong> and <strong style={{ color: '#b0bd22' }}>essential nutrients</strong>, each fruit tells a story of quality and care.
              </p>
            </div>

            <div style={{
              background: 'rgba(9, 55, 41, 0.35)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: '1px solid rgba(214, 229, 52, 0.25)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#d6e534',
                fontFamily: fonts.secondary,
                marginBottom: '1.5rem',
                letterSpacing: '0.01em'
              }}>
                Our Promise
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#a1c171',
                fontFamily: fonts.tertiary,
                marginBottom: '1.5rem'
              }}>
                Whether you're looking for something <strong style={{ color: '#d6e534' }}>sweet</strong>, <strong style={{ color: '#d6e534' }}>tangy</strong>, or <strong style={{ color: '#d6e534' }}>creamy</strong>, we have the fruit for you. We take pride in offering a <strong style={{ color: '#b0bd22' }}>diverse range of fruits</strong> that cater to all tastes and preferences.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#a1c171',
                fontFamily: fonts.tertiary
              }}>
                <strong style={{ color: '#d6e534', fontSize: '1.2rem' }}>From our farm to your table, we promise fresh fruit that brings joy to every bite.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{
          textAlign: 'center',
          padding: '3rem 0',
          background: 'rgba(214, 229, 52, 0.1)',
          borderRadius: '20px',
          border: '1px solid rgba(214, 229, 52, 0.3)',
          marginTop: '2rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#d6e534',
            fontFamily: fonts.secondary,
            marginBottom: '1rem',
            letterSpacing: '0.01em'
          }}>
            Experience the Difference
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#a1c171',
            fontFamily: fonts.tertiary,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            So go ahead, explore our range, and experience the <strong style={{ color: '#d6e534' }}>fresh, vibrant flavors</strong> that will make your day brighter!
          </p>
        </section>

      </div>
    </main>
  )
}
