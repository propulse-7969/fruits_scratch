import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fonts } from '../fonts'

export default function Blogs() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.set(document.documentElement, { backgroundColor: '#093729' })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  // Dummy blog data
  const blogs = [
    {
      id: 1,
      title: "The Health Benefits of Fresh Oranges",
      description: "Discover the incredible nutritional value of fresh oranges and how they can boost your immune system, improve skin health, and provide essential vitamins for your daily wellness journey.",
      image: "🍊",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Health & Nutrition"
    },
    {
      id: 2,
      title: "Farm-to-Table: Our Sustainable Journey",
      description: "Learn about our commitment to sustainable farming practices, from water conservation to energy-efficient transportation, and how we ensure the freshest fruits reach your table.",
      image: "🌱",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Sustainability"
    },
    {
      id: 3,
      title: "Seasonal Fruit Guide: What's Fresh This Month",
      description: "Explore our comprehensive guide to seasonal fruits available this month, including storage tips, preparation methods, and delicious recipe ideas to make the most of nature's bounty.",
      image: "📅",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Seasonal Guide"
    },
    {
      id: 4,
      title: "Avocado: The Superfood for Modern Living",
      description: "Uncover the amazing health benefits of avocados, from heart-healthy fats to brain-boosting nutrients. Learn why this creamy fruit has become a staple in healthy diets worldwide.",
      image: "🥑",
      date: "March 8, 2024",
      readTime: "4 min read",
      category: "Health & Nutrition"
    },
    {
      id: 5,
      title: "Sweet Strawberries: Nature's Perfect Dessert",
      description: "Dive into the world of strawberries and discover their antioxidant properties, vitamin C content, and delicious ways to incorporate them into your daily meals and snacks.",
      image: "🍓",
      date: "March 5, 2024",
      readTime: "5 min read",
      category: "Health & Nutrition"
    },
    {
      id: 6,
      title: "From Orchard to Your Door: Our Delivery Promise",
      description: "Take a behind-the-scenes look at our carefully designed delivery process that ensures your fruits arrive fresh, undamaged, and at the peak of their flavor and nutritional value.",
      image: "🚚",
      date: "March 3, 2024",
      readTime: "6 min read",
      category: "Behind the Scenes"
    }
  ]

  return (
    <main style={{ 
      minHeight: '100vh',
      backgroundColor: '#093729',
      padding: '4rem 2rem 2rem',
      color: '#a1c171'
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto'
      }}>
        
        {/* Header Section */}
        <section style={{
          textAlign: 'center',
          padding: '1rem 0 2rem',
          marginBottom: '1rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 'bold',
            color: '#d6e534',
            fontFamily: fonts.primary,
            marginBottom: '1rem',
            letterSpacing: '0.02em'
          }}>
            Fresh Insights
          </h1>
          <div style={{
            width: '100px',
            height: '4px',
            backgroundColor: '#d6e534',
            margin: '0 auto 1rem',
            borderRadius: '2px'
          }} />
        </section>

        {/* Blog Cards Grid */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {blogs.map((blog) => (
            <article
              key={blog.id}
              style={{
                background: 'rgba(9, 55, 41, 0.35)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '0',
                border: '1px solid rgba(214, 229, 52, 0.25)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                overflow: 'hidden',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.3)'
                e.currentTarget.style.borderColor = 'rgba(214, 229, 52, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)'
                e.currentTarget.style.borderColor = 'rgba(214, 229, 52, 0.25)'
              }}
            >
              {/* Blog Image Placeholder */}
              <div style={{
                height: '200px',
                background: `linear-gradient(135deg, rgba(214, 229, 52, 0.2), rgba(161, 193, 113, 0.3))`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  background: 'rgba(9, 55, 41, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  transition: 'all 0.3s ease'
                }}>
                  {blog.image}
                </div>
              </div>

              {/* Blog Content */}
              <div style={{
                padding: '2rem'
              }}>
                {/* Category Badge */}
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(214, 229, 52, 0.15)',
                  color: '#d6e534',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  fontFamily: fonts.secondary,
                  marginBottom: '1rem',
                  border: '1px solid rgba(214, 229, 52, 0.3)'
                }}>
                  {blog.category}
                </div>

                {/* Blog Title */}
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#d6e534',
                  fontFamily: fonts.secondary,
                  marginBottom: '1rem',
                  lineHeight: '1.3',
                  letterSpacing: '0.01em'
                }}>
                  {blog.title}
                </h2>

                {/* Blog Description */}
                <p style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#a1c171',
                  fontFamily: fonts.tertiary,
                  marginBottom: '1.5rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {blog.description}
                </p>

                {/* Blog Meta */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(214, 229, 52, 0.2)'
                }}>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#b0bd22',
                    fontFamily: fonts.tertiary
                  }}>
                    {blog.date}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#d6e534',
                    fontFamily: fonts.secondary,
                    fontWeight: '600'
                  }}>
                    {blog.readTime}
                  </div>
                </div>

                {/* Read More Button */}
                <div style={{
                  marginTop: '1.5rem',
                  textAlign: 'center'
                }}>
                  <button style={{
                    background: 'rgba(214, 229, 52, 0.1)',
                    border: '2px solid rgba(214, 229, 52, 0.5)',
                    color: '#d6e534',
                    padding: '0.75rem 2rem',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: fonts.secondary,
                    letterSpacing: '0.01em'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(214, 229, 52, 0.2)'
                    e.currentTarget.style.borderColor = 'rgba(214, 229, 52, 0.8)'
                    e.currentTarget.style.color = '#fee832'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(214, 229, 52, 0.1)'
                    e.currentTarget.style.borderColor = 'rgba(214, 229, 52, 0.5)'
                    e.currentTarget.style.color = '#d6e534'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Newsletter Signup */}
        <section style={{
          textAlign: 'center',
          padding: '2rem 1.5rem',
          background: 'rgba(214, 229, 52, 0.1)',
          borderRadius: '20px',
          border: '1px solid rgba(214, 229, 52, 0.3)',
          marginTop: '1rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#d6e534',
            fontFamily: fonts.secondary,
            marginBottom: '1rem',
            letterSpacing: '0.01em'
          }}>
            Stay Fresh & Informed
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#a1c171',
            fontFamily: fonts.tertiary,
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Subscribe to our newsletter for the latest fruit insights, health tips, and seasonal guides delivered fresh to your inbox.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                minWidth: '250px',
                padding: '1rem 1.5rem',
                borderRadius: '25px',
                border: '2px solid rgba(214, 229, 52, 0.5)',
                background: 'rgba(9, 55, 41, 0.5)',
                color: '#d6e534',
                fontSize: '1rem',
                fontFamily: fonts.tertiary,
                outline: 'none'
              }}
            />
            <button style={{
              background: '#d6e534',
              border: '2px solid #d6e534',
              color: '#093729',
              padding: '1rem 2rem',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: fonts.secondary,
              letterSpacing: '0.01em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#fee832'
              e.currentTarget.style.borderColor = '#fee832'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#d6e534'
              e.currentTarget.style.borderColor = '#d6e534'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
            >
              Subscribe
            </button>
          </div>
        </section>

      </div>
    </main>
  )
}


