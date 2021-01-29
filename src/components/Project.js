import React from 'react'
import Container from './Container'
import Animate from './Animate'
import Img from 'gatsby-image'

function Project({ title, image, description }) {
  return (
    <div className="h-screen w-screen pt-96 pb-96 relative flex flex-col justify-items-center">
      <div className="absolute right-0 h-full top-0 bottom-0 flex justify-center flex-col w-5/12">
        <Img fluid={image.childImageSharp.fluid} />
      </div>
      <Container>
        <div className="w-6/12">
          <Animate animateClass="animate__fadeInUp">
            <div className="font-medium text-dark-2 text-lg uppercase tracking-wide mb-16">
              Projekt
            </div>
          </Animate>
          <Animate animateClass="animate__fadeInUp">
            <h2 className="font-normal text-gray-300 text-5xl leading-tight mb-10 max-w-2xl">
              {title}
            </h2>
          </Animate>
          <Animate animateClass="animate__fadeInUp">
            <p className="text-lg text-gray-300 max-w-3xl">{description}</p>
          </Animate>
        </div>
      </Container>
    </div>
  )
}

export default Project
