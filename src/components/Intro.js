import React from 'react'
import Container from './Container'
import Animate from './Animate'

export default function Intro() {
  return (
    <section className="w-full from-black bg-gradient-to-b to-dark-8">
      <Container>
        <div className="pt-24 pb-64">
          <Animate animateClass="animate__fadeInUp">
            <div className="font-medium text-dark-2 text-lg uppercase tracking-wide">
              Philosophie
            </div>
          </Animate>
          <Animate animateClass="animate__fadeInUp">
            <div className="mt-12 mb-12 border-l border-gray-300 h-20"></div>
          </Animate>
          <Animate animateClass="animate__fadeInUp">
            <h2 className="font-normal text-gray-300 text-6xl leading-tight mb-10 max-w-2xl">
              Wir engagieren uns wirtschaftlich und sozial
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
    </section>
  )
}
