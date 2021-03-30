import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { graphql } from 'gatsby'
import Container from '../components/Container'

function Page({ data }) {
  const page = data.markdownRemark.html

  return (
    <div>
      <Navigation />
      <section className="pt-64 pb-32 bg-gradient-to-b from-dark-8 to-dark-7">
        <Container>
          <div
            className="prose mx-auto lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: page }}
          ></div>
        </Container>
      </section>
      <Footer />
    </div>
  )
}

export default Page

export const query = graphql`
  {
    markdownRemark(frontmatter: { slug: { eq: "imprint" } }) {
      html
    }
  }
`
