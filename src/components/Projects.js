import React from 'react'
import Container from './Container'

export default function Projects({ title }) {
  return (
    <section className="py-32 bg-original-1">
      <Container>
        <h2 className="text-3xl font-serif font-bold text-original-8">
          {title}
        </h2>
      </Container>
    </section>
  )
}
