import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/Seo'
import Navigation from '../components/Navigation'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export default function Index({ data }) {
  const homePage = data.pagesYaml
  const projects = data.allProjectsYaml.nodes

  return (
    <div style={{ scrollSnapType: 'y proximity' }}>
      <Seo
        title={homePage.meta.title}
        description={homePage.meta.description}
        image={homePage.meta.image.childImageSharp.fluid.src}
      />
      <Navigation />
      <Hero />
      <Intro />
      <Projects projects={projects} />

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
    allProjectsYaml {
      nodes {
        image {
          childImageSharp {
            fluid {
              aspectRatio
              base64
              sizes
              src
              srcSet
            }
          }
        }
        id
        name
        description
      }
    }
  }
`
