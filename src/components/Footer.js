import React from 'react'
import Container from './Container'
import Button from './Button'
import FooterLink from './FooterLink'
import { useStaticQuery, graphql } from 'gatsby'
import sanitizeHtml from 'sanitize-html'

export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      footer: settingsYaml(slug: { eq: "footer" }) {
        bottom {
          columnOneTitle
          columnTwoTitle
        }
        top {
          buttonLink
          buttonText
          text
          title
        }
      }
      global: settingsYaml(slug: { eq: "global" }) {
        phone
        email
        address
      }
    }
  `)
  const footer = data.footer
  const global = data.global
  const makeText = (text) => sanitizeHtml(text.replace(/\n/g, '<br />'))

  return (
    <footer id="kontakt" className="bg-gradient-to-t from-black to-dark-7">
      <Container>
        <div className="py-32">
          <div className="flex justify-between flex-wrap">
            <div className="flex flex-col w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-2xl font-bold leading-tight tracking-tight lg:text-4xl mb-3 text-gray-300">
                {footer.top.title}
              </h2>
              <p className="text-base lg:text-lg text-gray-400">
                {footer.top.text}
              </p>
            </div>
            <div className="flex flex-col w-full md:w-1/2 justify-center">
              <div className="flex justify-end">
                <Button href={footer.top.buttonLink}>
                  {footer.top.buttonText}
                </Button>
              </div>
            </div>
          </div>
          <hr className="mt-8 mb-10 border-0 bg-alex-1 bg-opacity-30 h-1" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-0">
            <div>
              <h3 className="font-bold leading-tight tracking-tight text-alex-2 mb-5">
                {footer.bottom.columnOneTitle}
              </h3>
              <FooterLink to="#philosophie">Philosophie</FooterLink>
              <FooterLink to="#projekte">
                Wirtschaftliches Engagement
              </FooterLink>
              <FooterLink to="#projekte">
                Soziales &amp; Gesellschaftliches
              </FooterLink>
              <FooterLink to="#kontakt">Kontakt</FooterLink>
            </div>
            <div>
              <h3 className="font-bold leading-tight tracking-tight text-alex-2 mb-5">
                {footer.bottom.columnTwoTitle}
              </h3>
              <FooterLink to={`tel:${global.phone}`}>{global.phone}</FooterLink>
              <FooterLink to={`mailto:${global.email}`}>
                {global.email}
              </FooterLink>
              <address
                className="text-alex-2 block pl-1 py-2 rounded-md not-italic text-opacity-80 mb-1"
                dangerouslySetInnerHTML={{ __html: makeText(global.address) }}
              />
            </div>
            <div className="text-right text-sm sm:col-start-2 lg:col-start-auto">
              <FooterLink to="/impressum/" reverse>
                Impressum
              </FooterLink>
              <FooterLink to="/datenschutz/" reverse>
                Datenschutz
              </FooterLink>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
