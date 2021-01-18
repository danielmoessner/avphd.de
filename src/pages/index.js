import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Philosophy from '../components/Philosophy'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Index(props) {
  let homePage = props.data.pagesYaml

  return (
    <div>
      <Seo
        title={homePage.meta.title}
        description={homePage.meta.description}
        image={homePage.meta.image.childImageSharp.fluid.src}
      />
      <Navigation />
      <Hero />
      <Philosophy />
      <Projects title="Wirtschaftliches Engagement" />
      <Projects title="Soziales &amp; Gesellschaftliches" />
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
