import React from 'react'
import Container from './Container'
import Button from './Button'
import FooterLink from './FooterLink'
import BackgroundDark from './BackgroundLight'

export default function Footer() {
  return (
    <footer className="">
      <BackgroundDark>
        <Container>
          <div className="py-32">
            <div className="flex justify-between flex-wrap">
              <div className="flex flex-col w-full md:w-1/2 mb-10 md:mb-0">
                <h2 className="font-bold leading-tight tracking-tight text-4xl font-serif mb-3">
                  Wollen Sie mehr erfahren?
                </h2>
                <p className="text-lg">
                  Wir helfen Ihnen gerne weiter und erzählen Ihnen mehr von
                  unseren Projekten.
                </p>
              </div>
              <div className="flex flex-col w-full md:w-1/2 justify-center">
                <div className="flex justify-end">
                  <Button>Kontakt aufnehmen</Button>
                </div>
              </div>
            </div>
            <hr className="mt-8 mb-10 border-0 bg-alex-1 bg-opacity-30 h-1" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-0">
              <div>
                <h3 className="font-bold leading-tight tracking-tight text-alex-2 mb-5">
                  Alexander v.P.H. Dobbrunz
                </h3>
                <FooterLink>Philosophie</FooterLink>
                <FooterLink>Wirtschaftliches Engagement</FooterLink>
                <FooterLink>Soziales &amp; Gesellschaftliches</FooterLink>
                <FooterLink>Kontakt</FooterLink>
              </div>
              <div>
                <h3 className="font-bold leading-tight tracking-tight text-alex-2 mb-5">
                  Kontakt
                </h3>
                <FooterLink>Telefon</FooterLink>
                <FooterLink>E-Mail</FooterLink>
                <FooterLink>
                  Straße 111 <br />
                  12345 Stadtteil
                </FooterLink>
              </div>
              <div className="text-right text-sm">
                <FooterLink reverse>Impressum</FooterLink>
                <FooterLink reverse>Datenschutz</FooterLink>
              </div>
            </div>
          </div>
        </Container>
      </BackgroundDark>
    </footer>
  )
}
