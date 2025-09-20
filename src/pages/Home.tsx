import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fonts } from '../fonts'

export default function Home() {
  const flavorsRef = useRef<HTMLElement | null>(null)
  const flavorsContentRef = useRef<HTMLDivElement | null>(null)
  const ringMidRef = useRef<HTMLDivElement | null>(null)
  const ringInnerRef = useRef<HTMLDivElement | null>(null)
  const chooserBgRef = useRef<HTMLDivElement | null>(null)
  const diveTextRef = useRef<HTMLDivElement | null>(null)
  const intoTextRef = useRef<HTMLDivElement | null>(null)
  const betterTextRef = useRef<HTMLDivElement | null>(null)
  const healthTextRef = useRef<HTMLDivElement | null>(null)
  const purpleSectionRef = useRef<HTMLElement | null>(null)
  const greenSectionRef = useRef<HTMLElement | null>(null)
  const finalSectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Set initial background color to yellow
    gsap.set(document.documentElement, { backgroundColor: '#fcde47' })

    // Dummy transition to ensure page loads with yellow background
    gsap.fromTo(document.documentElement, {
      backgroundColor: '#fcde47'
    }, {
      backgroundColor: '#fcde47',
      duration: 0.01,
      ease: 'none'
    })

    const tween = gsap.fromTo(document.documentElement, {
      backgroundColor: '#fcde47'
    }, {
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

    // DIVE text parallax animation
    let diveAnimation: gsap.core.Tween | undefined
    if (diveTextRef.current) {
      diveAnimation = gsap.fromTo(
        diveTextRef.current,
        {
          x: '0vw',
          y: '0vh',
          scale: 2 // Start bigger as it enters
        },
        {
          x: '-80vw', // More prominent movement - goes from 50vw to -50vw (off screen)
          y: '-175vh', // 1.75x faster than scroll
          scale: 0.00000001, // Gets smaller as it goes out
          ease: 'none',
          scrollTrigger: {
            trigger: diveTextRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }

    // INTO text parallax animation
    let intoAnimation: gsap.core.Tween | undefined
    if (intoTextRef.current) {
      intoAnimation = gsap.fromTo(
        intoTextRef.current,
        {
          x: '0vw',
          y: '0vh',
          scale: 2 // Start bigger as it enters
        },
        {
          x: '-80vw',
          y: '-175vh',
          scale: 0.00000001, // Gets smaller as it goes out
          ease: 'none',
          scrollTrigger: {
            trigger: intoTextRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }

    // BETTER text parallax animation
    let betterAnimation: gsap.core.Tween | undefined
    if (betterTextRef.current) {
      betterAnimation = gsap.fromTo(
        betterTextRef.current,
        {
          x: '0vw',
          y: '0vh',
          scale: 2 // Start bigger as it enters
        },
        {
          x: '-80vw',
          y: '-175vh',
          scale: 0.00000001, // Gets smaller as it goes out
          ease: 'none',
          scrollTrigger: {
            trigger: betterTextRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }

    // HEALTH text parallax animation
    let healthAnimation: gsap.core.Tween | undefined
    if (healthTextRef.current) {
      healthAnimation = gsap.fromTo(
        healthTextRef.current,
        {
          x: '0vw',
          y: '0vh',
          scale: 2 // Start bigger as it enters
        },
        {
          x: '-80vw',
          y: '-175vh',
          scale: 0.00000001, // Gets smaller as it goes out
          ease: 'none',
          scrollTrigger: {
            trigger: healthTextRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
    }

    // Background color transition from #d9f99d to blue when chooser section is scrolled
    let chooserBgTransition: gsap.core.Tween | undefined
    if (chooserBgRef.current) {
      chooserBgTransition = gsap.fromTo(document.documentElement, {
        backgroundColor: '#d9f99d'
      }, {
        backgroundColor: '#c0f0f5',
        ease: 'none',
        scrollTrigger: {
          trigger: chooserBgRef.current,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
      })
    }

    // Background color transition from blue to yellow
    let bgColorTransition: gsap.core.Tween | undefined
    if (healthTextRef.current) {
      bgColorTransition = gsap.fromTo(document.documentElement, {
        backgroundColor: '#c0f0f5'
      }, {
        backgroundColor: '#fcde47',
        ease: 'none',
        scrollTrigger: {
          trigger: healthTextRef.current,
          start: 'bottom 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      })
    }

    // Background color transition from yellow to purple
    let purpleBgTransition: gsap.core.Tween | undefined
    if (purpleSectionRef.current) {
      purpleBgTransition = gsap.fromTo(document.documentElement, {
        backgroundColor: '#fcde47'
      }, {
        backgroundColor: '#e9cff6',
        ease: 'none',
        scrollTrigger: {
          trigger: purpleSectionRef.current,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
      })
    }

    // Background color transition from purple to green
    let greenBgTransition: gsap.core.Tween | undefined
    if (greenSectionRef.current) {
      greenBgTransition = gsap.fromTo(document.documentElement, {
        backgroundColor: '#e9cff6'
      }, {
        backgroundColor: '#cbef9a',
        ease: 'none',
        scrollTrigger: {
          trigger: greenSectionRef.current,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
      })
    }

    // Background color transition from green to yellow for final section entrance
    let finalEntranceTransition: gsap.core.Tween | undefined
    if (finalSectionRef.current) {
      finalEntranceTransition = gsap.fromTo(document.documentElement, {
        backgroundColor: '#cbef9a'
      }, {
        backgroundColor: '#fcde47',
        ease: 'none',
        scrollTrigger: {
          trigger: finalSectionRef.current,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
      })
    }

    // Background color transition from yellow to yellow for final section
    let finalBgTransition: gsap.core.Tween | undefined
    if (finalSectionRef.current) {
      finalBgTransition = gsap.fromTo(document.documentElement, {
        backgroundColor: '#fcde47'
      }, {
        backgroundColor: '#fcde47',
        ease: 'none',
        scrollTrigger: {
          trigger: finalSectionRef.current,
          start: 'center center',
          end: 'center 30%',
          scrub: true,
        },
      })
    }

    return () => {
      tween.kill()
      fadeIn?.kill()
      diveAnimation?.kill()
      intoAnimation?.kill()
      betterAnimation?.kill()
      healthAnimation?.kill()
      chooserBgTransition?.kill()
      bgColorTransition?.kill()
      purpleBgTransition?.kill()
      greenBgTransition?.kill()
      finalEntranceTransition?.kill()
      finalBgTransition?.kill()
      ScrollTrigger.getAll().forEach((st) => st.kill())
      document.documentElement.style.backgroundColor = '#fcde47'
    }
  }, [])

  // Theme carousel state and rotating rings
  const themes = [
    {
      name: 'Oranges',
      subtitle: 'Refreshing and packed with Vitamin C',
      colors: ['#E8A87C', '#D4A574', '#C19A6C'], // outer→inner - muted orange tones
      canBg: '#D4A574',
      emoji: '🍊',
    },
    {
      name: 'Apples & Pears',
      subtitle: 'Crisp and naturally sweet',
      colors: ['#A8C09A', '#9BB88A', '#8EB07A'], // outer→inner - muted green tones
      canBg: '#9BB88A',
      emoji: '🍎',
    },
    {
      name: 'Table Grapes',
      subtitle: 'Naturally sweet and loaded with antioxidants',
      colors: ['#B8A8C8', '#A898B8', '#9888A8'], // outer→inner - muted purple tones
      canBg: '#A898B8',
      emoji: '🍇',
    },
    {
      name: 'Avocados',
      subtitle: 'Creamy and full of healthy fats',
      colors: ['#8A9A7A', '#7A8A6A', '#6A7A5A'], // outer→inner - muted earthy green tones
      canBg: '#7A8A6A',
      emoji: '🥑',
    },
    {
      name: 'Peaches & Plums',
      subtitle: 'Juicy and flavorful, perfect for summer',
      colors: ['#E8B8C8', '#D8A8B8', '#C898A8'], // outer→inner - muted pink tones
      canBg: '#D8A8B8',
      emoji: '🍑',
    },
    {
      name: 'Cherries',
      subtitle: 'Tart and sweet, full of antioxidants',
      colors: ['#C88A8A', '#B87A7A', '#A86A6A'], // outer→inner - muted red tones
      canBg: '#B87A7A',
      emoji: '🍒',
    },
    {
      name: 'Pomegranates',
      subtitle: 'Rich in juicy, nutrient-packed seeds',
      colors: ['#A86A6A', '#985A5A', '#884A4A'], // outer→inner - muted burgundy tones
      canBg: '#985A5A',
      emoji: '🍎',
    },
    {
      name: 'Lychees',
      subtitle: 'Sweet, juicy, and tropical',
      colors: ['#E8C8B8', '#D8B8A8', '#C8A898'], // outer→inner - muted coral tones
      canBg: '#D8B8A8',
      emoji: '🍒',
    },
    {
      name: 'Strawberries',
      subtitle: 'Sweet, vibrant, and perfect for any dish',
      colors: ['#D88A8A', '#C87A7A', '#B86A6A'], // outer→inner - muted strawberry tones
      canBg: '#C87A7A',
      emoji: '🍓',
    },
  ] as const

  const indexRef = useRef(0)

  useEffect(() => {
    // continuous infinite rotation without snap-back
    const tweens: gsap.core.Tween[] = []
    if (ringMidRef.current) {
      tweens.push(gsap.to(ringMidRef.current, { 
        rotation: '-=360', 
        duration: 80, 
        ease: 'none', 
        repeat: -1 
      }))
    }
    if (ringInnerRef.current) {
      tweens.push(gsap.to(ringInnerRef.current, { 
        rotation: '+=360', 
        duration: 100, 
        ease: 'none', 
        repeat: -1 
      }))
    }
    return () => { tweens.forEach(t => t.kill()) }
  }, [])

  const applyTheme = (i: number) => {
    const theme = themes[i]
    // Create a timeline to animate all elements simultaneously
    const tl = gsap.timeline()
    
    if (ringMidRef.current) {
      tl.to(ringMidRef.current, { backgroundColor: theme.colors[1], duration: 0.5 }, 0)
    }
    if (ringInnerRef.current) {
      tl.to(ringInnerRef.current, { backgroundColor: theme.colors[2], duration: 0.5 }, 0)
    }
    if (chooserBgRef.current) {
      tl.to(chooserBgRef.current, { backgroundColor: theme.colors[0], duration: 0.5 }, 0)
    }
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
      <section style={{ minHeight: '300vh', padding: '2rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Content for the new section can be added here */}
        </div>
        
        {/* DIVE text with HELLO styling */}
        <div 
          ref={diveTextRef}
          className="home-title"
          style={{
            position: 'absolute',
            bottom: '200vh',
            left: '60vw',
            transform: 'translateX(-50%)',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        >
          DIVE
        </div>

        {/* INTO text with HELLO styling */}
        <div 
          ref={intoTextRef}
          className="home-title"
          style={{
            position: 'absolute',
            bottom: '150vh',
            left: '60vw',
            transform: 'translateX(-50%)',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        >
          INTO
        </div>

        {/* BETTER text with HELLO styling */}
        <div 
          ref={betterTextRef}
          className="home-title"
          style={{
            position: 'absolute',
            bottom: '100vh',
            left: '60vw',
            transform: 'translateX(-50%)',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        >
          BETTER
        </div>

        {/* HEALTH text with HELLO styling */}
        <div 
          ref={healthTextRef}
          className="home-title"
          style={{
            position: 'absolute',
            bottom: '50vh',
            left: '60vw',
            transform: 'translateX(-50%)',
            zIndex: 10,
            pointerEvents: 'none'
          }}
        >
          HEALTH
        </div>
      </section>

      {/* Gut-Friendly Goodness content */}
      <div className="gut-friendly-section" style={{ 
        maxWidth: '800px', 
        textAlign: 'left',
        color: '#08304a',
        margin: '0',
        padding: '4rem 1rem 4rem 6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh'
      }}>
        <div style={{ width: '100%' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#08304a',
            fontFamily: fonts.secondary,
            lineHeight: '1.05'
          }}>
            Gut-Friendly Goodness
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            lineHeight: '1.6', 
            marginBottom: '2rem',
            maxWidth: '640px',
            color: '#08304a',
            fontFamily: fonts.tertiary,
            letterSpacing: '0.01em'
          }}>
            Our fruits are packed with natural fibers and essential nutrients, offering your gut the love it deserves. Say goodbye to bloating and hello to a happy, healthy digestive system with every bite. From refreshing oranges to sweet strawberries, our fruit mix is designed to keep your gut in check and your taste buds delighted!
          </p>
        </div>
      </div>

      {/* New section with purple background transition */}
      <section ref={purpleSectionRef} className="light-calories-section" style={{ 
        minHeight: '100vh', 
        padding: '4rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}>
        <div style={{ 
          maxWidth: '800px', 
          textAlign: 'left',
          color: '#08304a',
          margin: '0',
          padding: '4rem 6rem 4rem 0'
        }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#08304a',
            fontFamily: fonts.secondary,
            lineHeight: '1.05'
          }}>
            Light Calories, Big Flavor
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            lineHeight: '1.6', 
            marginBottom: '2rem',
            maxWidth: '640px',
            color: '#08304a',
            fontFamily: fonts.tertiary,
            letterSpacing: '0.01em'
          }}>
            Indulge in the refreshing taste of our fruits without the guilt. Packed with natural sweetness and just the right amount of nutrients, our fruit blend gives you all the flavor you crave, with none of the compromise. Enjoy all the goodness, with light calories and a big burst of natural flavor!
          </p>
        </div>
      </section>

      {/* New section with green background transition */}
      <section ref={greenSectionRef} className="naturally-refreshing-section" style={{ 
        minHeight: '100vh', 
        padding: '4rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}>
        <div style={{ 
          maxWidth: '800px', 
          textAlign: 'left',
          color: '#08304a',
          margin: '0',
          padding: '4rem 0 4rem 6rem'
        }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#08304a',
            fontFamily: fonts.secondary,
            lineHeight: '1.05'
          }}>
            Naturally Refreshing
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            lineHeight: '1.6', 
            marginBottom: '2rem',
            maxWidth: '640px',
            color: '#08304a',
            fontFamily: fonts.tertiary,
            letterSpacing: '0.01em'
          }}>
            Our fruits are made with only the freshest, natural ingredients, delivering a crisp, clean taste that's as refreshing as it is delicious. Free from artificial sweeteners and flavors, each bite gives you a natural boost of refreshment. Enjoy the vibrant, pure taste of nature's best, packed into one perfect blend!
          </p>
        </div>
      </section>

      {/* Final section with "The Fruit That Brings a Smile" */}
      <section ref={finalSectionRef} style={{ 
        minHeight: '100vh', 
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fe6334',
        position: 'relative'
      }}>
        <div style={{ 
          width: '100%',
          textAlign: 'center',
          color: '#08304a',
          margin: '0',
          padding: '2rem'
        }}>
          <div className="final-message">
            <div className="final-text-large">FRUIT</div>
            <div className="final-text-small">THAT</div>
            <div className="final-text-small">BRINGS</div>
            <div className="final-text-small">A</div>
            <div className="final-text-large">SMILE</div>
          </div>
        </div>
      </section>

      {/* Yellow card section */}
      <section style={{ 
        minHeight: '15vh', 
        backgroundColor: '#fee832'
      }}>
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
      <div style={{ 
        fontSize: '1.75rem', 
        fontWeight: 700, 
        fontFamily: fonts.secondary,
        color: '#fff',
      }}>{name || '—'}</div>
      <div style={{ 
        opacity: 0.85, 
        fontFamily: fonts.tertiary,
        color: '#fff',
        fontSize: '1rem',
        marginTop: '0.5rem',
      }}>{subtitle || ''}</div>
    </div>
  )
}


