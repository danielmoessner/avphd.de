import React from 'react'
import Container from './Container'
import Button from './Button'
import FooterLink from './FooterLink'

export default function Footer() {
  return (
    <footer className="bg-original-2 py-32">
      <Container>
        <div className="flex justify-between">
          <div className="flex flex-col w-1/2">
            <h2 className="text-original-8 font-bold leading-tight tracking-tight text-4xl font-serif mb-3">
              Wollen Sie mehr erfahren?
            </h2>
            <p className="text-original-8 text-lg">
              Wir helfen Ihnen gerne weiter und erzählen Ihnen mehr von unseren
              Projekten.
            </p>
          </div>
          <div className="flex flex-col w-1/2 justify-center">
            <div className="flex justify-end">
              <Button>Kontakt aufnehmen</Button>
            </div>
          </div>
        </div>
        <hr className="mt-8 mb-10 border-0 bg-original-8 bg-opacity-10 h-1" />
        <div className="grid grid-cols-3">
          <div>
            <h3 className="font-bold leading-tight tracking-tight text-original-6 mb-5">
              Alexander v.P.H. Dobbrunz
            </h3>
            <FooterLink>Philosophie</FooterLink>
            <FooterLink>Wirtschaftliches Engagement</FooterLink>
            <FooterLink>Soziales &amp; Gesellschaftliches</FooterLink>
            <FooterLink>Kontakt</FooterLink>
          </div>
          <div>
            <h3 className="font-bold leading-tight tracking-tight text-original-6 mb-5">
              Kontakt
            </h3>
            <FooterLink>Telefon</FooterLink>
            <FooterLink>E-Mail</FooterLink>
            <FooterLink>
              Straße 111 <br />
              12345 Stadtteil
            </FooterLink>
          </div>
        </div>
      </Container>
    </footer>
  )
}
