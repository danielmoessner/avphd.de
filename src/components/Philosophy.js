import React from 'react'
import Container from './Container'
import BackgroundDark from './BackgroundDark'

export default function Philosophy() {
  return (
    <section className="relative z-40">
      <BackgroundDark>
        <div className="">
          <div className="pt-12 pb-16">
            <Container>
              <h2 className="text-center font-bold text-xl leading-tight tracking-wide mb-4">
                Unsere Philosophie
              </h2>
              <p className="mx-auto max-w-md text-alex-9 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur beatae dolor quaerat maxime, illum voluptates? A,
                quis perferendis ducimus ut aperiam dignissimos consequatur vero
                eum placeat veniam repellendus in iure?
              </p>
            </Container>
          </div>
        </div>
      </BackgroundDark>
    </section>
  )
}
