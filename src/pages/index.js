import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import BackgroundHero from '../components/BackgroundHero'

export default function Index(props) {
  let homePage = props.data.pagesYaml

  return (
    <div style={{ scrollSnapType: 'y proximity' }}>
      <Seo
        title={homePage.meta.title}
        description={homePage.meta.description}
        image={homePage.meta.image.childImageSharp.fluid.src}
      />
      <Navigation />
      <BackgroundHero />
      <Hero />
      <Projects />

      <Footer />
    </div>
  )
}

export const query = graphql`
  {
    pagesYaml(slug: { eq: "home" }) {
      meta {
        title
        description
        image {
          childImageSharp {
            fluid {
              src
              srcSet
              sizes
              base64
              aspectRatio
            }
          }
        }
      }
    }
  }
`
