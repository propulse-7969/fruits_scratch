import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Home() {
  const flavorsRef = useRef<HTMLElement | null>(null)
  const flavorsContentRef = useRef<HTMLDivElement | null>(null)
  const ringMidRef = useRef<HTMLDivElement | null>(null)
  const ringInnerRef = useRef<HTMLDivElement | null>(null)
  const chooserBgRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tween = gsap.to(document.documentElement, {
      backgroundColor: '#d9f99d',
      ease: 'none',
      scrollTrigger: {
        trigger: flavorsRef.current!,
        start: 'top bottom',
        end: 'center center',
        scrub: true,
      },
    })

    // Ensure content hidden initially
    if (flavorsContentRef.current) {
      gsap.set(flavorsContentRef.current, { autoAlpha: 0 })
    }

    // Fade in when the content center is just above the viewport center
    let fadeIn: gsap.core.Tween | undefined
    if (flavorsContentRef.current) {
      fadeIn = gsap.fromTo(
        flavorsContentRef.current,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: flavorsContentRef.current,
            start: 'center 80%', // start earlier
            end: 'center 50%',   // ensure we hit full opacity
            scrub: true,
            onLeave: () => {
              gsap.set(flavorsContentRef.current!, { autoAlpha: 1 })
            },
            onLeaveBack: () => {
              gsap.set(flavorsContentRef.current!, { autoAlpha: 0 })
            },
          },
        }
      )
    }

    return () => {
      tween.kill()
      fadeIn?.kill()
      ScrollTrigger.getAll().forEach((st) => st.kill())
      document.documentElement.style.backgroundColor = '#fcde47'
    }
  }, [])

  // Theme carousel state and rotating rings
  const themes = [
    {
      name: 'Lemon Lime',
      subtitle: '12 cans - $35.99',
      colors: ['#3F6B3C', '#2E5730', '#1E4122'], // outer→inner
      canBg: '#2DBE4A',
      emoji: '🥤',
    },
    {
      name: 'Orange Zest',
      subtitle: '12 cans - $34.99',
      colors: ['#B85C1B', '#A24E13', '#7D3C0D'],
      canBg: '#FF8C28',
      emoji: '🍊',
    },
    {
      name: 'Berry Blast',
      subtitle: '12 cans - $36.99',
      colors: ['#5F2B6B', '#4A2054', '#34163B'],
      canBg: '#B254E6',
      emoji: '🫐',
    },
  ] as const

  const indexRef = useRef(0)

  useEffect(() => {
    // continuous subtle rotation
    const tweens: gsap.core.Tween[] = []
    if (ringMidRef.current) tweens.push(gsap.to(ringMidRef.current, { rotate: -360, duration: 80, ease: 'none', repeat: -1 }))
    if (ringInnerRef.current) tweens.push(gsap.to(ringInnerRef.current, { rotate: 360, duration: 100, ease: 'none', repeat: -1 }))
    return () => { tweens.forEach(t => t.kill()) }
  }, [])

  const applyTheme = (i: number) => {
    const theme = themes[i]
    if (ringMidRef.current) gsap.to(ringMidRef.current, { backgroundColor: theme.colors[1], duration: 0.5 })
    if (ringInnerRef.current) gsap.to(ringInnerRef.current, { backgroundColor: theme.colors[2], duration: 0.5 })
    if (chooserBgRef.current) gsap.to(chooserBgRef.current, { backgroundColor: theme.colors[0], duration: 0.5 })
  }

  useEffect(() => {
    applyTheme(indexRef.current)
  }, [])

  const go = (dir: 1 | -1) => {
    const next = (indexRef.current + dir + themes.length) % themes.length
    indexRef.current = next
    applyTheme(next)
  }

  return (
    <main id="home">
      <section className="center-hero">
        <div className="home-hero">
          <h1 className="home-title">HELLO!</h1>
          <p className="home-subtitle">Freshness Perfected!</p>
          <p className="home-desc">Juicy, sweet, and bursting with flavor, fiber, natural sweetness, and a variety of fruits to keep your taste buds dancing. Welcome to the world of farm-fresh goodness, where every bite is a delight.</p>
        </div>
      </section>
      <section ref={flavorsRef} className="flavors-section">
        <div ref={flavorsContentRef} className="flavors-container" style={{ opacity: 0 }}>
          <h2 className="flavors-heading">Explore Our Fresh & Flavorful Fruits</h2>
          <p className="flavors-copy">From the sweetness of oranges to the richness of avocados, we offer a variety of fruits to satisfy every taste. Packed with essential nutrients, each fruit is carefully selected for its flavor, quality, and freshness.</p>
        </div>
      </section>

      {/* Flavor chooser carousel */}
      <section className="chooser-section" style={{ position: 'relative', height: '100vh', padding: '1rem 0 2rem', display: 'flex', overflow: 'hidden' }}>
        {/* Full-bleed background box (slightly oversized to avoid 1px seams) */}
        <div ref={chooserBgRef} style={{ position: 'absolute', inset: '-1px', background: themes[0].colors[0], zIndex: 0 }} />
        
         {/* Octagons positioned to fill entire section */}
         <div ref={ringMidRef} className="ring mid octagon" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '128.7vmin', aspectRatio: '1 / 1', background: themes[0].colors[1], filter: 'drop-shadow(0 6px 40px rgba(0,0,0,0.25))', clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', zIndex: 1 }} />
         <div ref={ringInnerRef} className="ring inner octagon" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '87.75vmin', aspectRatio: '1 / 1', background: themes[0].colors[2], clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', zIndex: 2 }} />
        
        <div className="chooser-wrap" style={{ position: 'relative', width: 'min(1100px, 92vw)', margin: '0 auto', zIndex: 10, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h2 className="flavors-heading" style={{ textAlign: 'center', margin: '1rem 0 0.75rem 0', color: '#fff', position: 'relative', zIndex: 15 }}>Choose Your Fruit</h2>
          {/* Keep all text elements grouped at the top */}
          <div style={{ position: 'relative', zIndex: 15 }}>
            <FlavorCaption getTheme={() => themes[indexRef.current]} />
          </div>
        </div>

        {/* Navigation buttons positioned within the section */}
        <button aria-label="Previous" onClick={() => go(-1)} style={{ position: 'absolute', left: '12%', top: '50%', transform: 'translateY(-50%)', width: '56px', height: '56px', borderRadius: '50%', border: '2px solid #fff', background: 'transparent', color: '#fff', fontSize: '24px', cursor: 'pointer', zIndex: 20 }}>{'<'}</button>
        <button aria-label="Next" onClick={() => go(1)} style={{ position: 'absolute', right: '12%', top: '50%', transform: 'translateY(-50%)', width: '56px', height: '56px', borderRadius: '50%', border: '2px solid #fff', background: 'transparent', color: '#fff', fontSize: '24px', cursor: 'pointer', zIndex: 20 }}>{'>'}</button>
      </section>

      {/* New section below chooser */}
      <section style={{ minHeight: '100vh', backgroundColor: '#c0f0f5', padding: '2rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Content for the new section can be added here */}
        </div>
      </section>
    </main>
  )
}

// Small component to read canRef dataset and re-render via state syncing
function FlavorCaption({ getTheme }: { getTheme: () => { name: string; subtitle: string } }) {
  const [, setTick] = useState<number>(0)
  useEffect(() => {
    const id = setInterval(() => setTick((n: number) => (n + 1) % 1000), 250)
    return () => clearInterval(id)
  }, [])
  const { name, subtitle } = getTheme()
  return (
    <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
      <div style={{ fontSize: '1.75rem', fontWeight: 700 }}>{name || '—'}</div>
      <div style={{ opacity: 0.85 }}>{subtitle || ''}</div>
    </div>
  )
}


