import React from 'react'
import Container from './Container'
import BackgroundLight from './BackgroundLight'

export default function Projects({ title }) {
  return (
    <section className="">
      <BackgroundLight>
        <div className="py-32">
          <Container>
            <h2 className="text-3xl font-serif font-bold">{title}</h2>
          </Container>
        </div>
      </BackgroundLight>
    </section>
  )
}
