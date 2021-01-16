import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Navigation from '../components/navigation'
import Hero from '../components/hero'
import Philosophy from '../components/philosophy'

export default function Index(props) {
  let homePage = props.data.pagesYaml

  return (
    <div>
      <Seo
        title={homePage.meta.title}
        description={homePage.meta.description}
        image={homePage.meta.image.childImageSharp.fluid.src}
        favicon={homePage.meta.image.childImageSharp.resize.src}
      />
      <Navigation />
      <Hero />
      <Philosophy />
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
            resize(width: 256, height: 256, cropFocus: CENTER) {
              src
            }
          }
        }
      }
    }
  }
`
