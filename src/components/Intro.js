import React from 'react'
import Container from './Container'
import Animate from './Animate'

export default function Intro({ section }) {
  return (
    <section
      id="philosophie"
      className="w-full from-black bg-gradient-to-b to-dark-8"
    >
      <Container>
        <div className="pt-24 pb-32 lg:pb-64">
          <Animate animateClass="animate__fadeInUp">
            <div className="font-medium text-dark-2 text-lg uppercase tracking-wide">
              {section.pretitle}
            </div>
          </Animate>
          <Animate animateClass="animate__fadeInUp">
            <div className="h-10 mt-12 mb-12 border-l border-gray-300 lg:h-20"></div>
          </Animate>
          <Animate animateClass="animate__fadeInUp">
            <h2 className="text-3xl font-normal text-gray-300 lg:text-6xl leading-tight mb-10 max-w-2xl">
              {section.title}
            </h2>
          </Animate>
          <Animate animateClass="animate__fadeInUp">
            <p className="text-base lg:text-lg text-gray-300 max-w-3xl">
              {section.text}
            </p>
          </Animate>
        </div>
      </Container>
    </section>
  )
}
