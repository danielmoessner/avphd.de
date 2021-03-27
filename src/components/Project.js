import React from 'react'
import Container from './Container'
import Animate from './Animate'
import Img from 'gatsby-image'

function Project({ title, category, image, description, preview }) {
  return (
    <div
      className={
        'relative flex items-center mb-24 lg:mb-0' +
        (!preview ? 'lg:h-screen lg:w-screen ' : '')
      }
    >
      <div className="hidden absolute right-0 h-full top-0 bottom-0 lg:flex justify-center flex-col w-5/12">
        {!preview ? <Img fluid={image.childImageSharp.fluid} /> : image}
      </div>
      <Container>
        <div className="lg:w-6/12">
          <Animate animateClass="animate__fadeInUp">
            <div className="text-base font-medium mb-6 text-dark-2 lg:text-lg uppercase tracking-wide lg:mb-16">
              {category}
            </div>
          </Animate>
          <Animate animateClass="animate__fadeInUp">
            <div className="mb-6 lg:hidden">
              <Img fluid={image.childImageSharp.fluid} />
            </div>
          </Animate>
          <Animate animateClass="animate__fadeInUp">
            <h2 className="text-3xl mb-6 font-normal text-gray-300 lg:text-5xl leading-tight lg:mb-10 max-w-2xl">
              {title}
            </h2>
          </Animate>
          <Animate animateClass="animate__fadeInUp">
            <p className="text-base lg:text-lg text-gray-300 max-w-3xl">
              {description}
            </p>
          </Animate>
        </div>
      </Container>
    </div>
  )
}

Project.defaultProps = {
  preview: false
}

export default Project
