import React from 'react'
import Container from './Container'
import Animate from './Animate'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

function Project() {
  const data = useStaticQuery(graphql`
    query ProjectImage {
      imageSharp(fluid: { originalName: { eq: "space.jpg" } }) {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
  `)

  return (
    <div className="h-screen w-full pt-96 pb-96 relative flex flex-col justify-items-center">
      <div className="absolute right-0 h-full top-0 bottom-0 flex justify-center flex-col w-5/12">
        <Img fluid={data.imageSharp.fluid} />
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
              Wir verbessern Ihren Alltag
            </h2>
          </Animate>
          <Animate animateClass="animate__fadeInUp">
            <p className="text-lg text-gray-300 max-w-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              optio saepe quibusdam exercitationem iste dolore vel impedit quas
              sapiente nisi possimus, quidem corrupti nesciunt voluptatum. Ipsam
              in cum vel. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Dolor accusantium molestias totam beatae, assumenda aliquid
              porro quibusdam sit quidem consequuntur saepe dolores, natus
              magni, nostrum perferendis vitae explicabo amet fugit.
            </p>
          </Animate>
        </div>
      </Container>
    </div>
  )
}

export default Project
