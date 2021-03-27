import React, { useState } from 'react'
import NavigationLink from './NavigationLink'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Navigation() {
  const data = useStaticQuery(graphql`
    {
      settingsYaml(slug: { eq: "navigation" }) {
        logo {
          childImageSharp {
            fluid(maxWidth: 200) {
              base64
              aspectRatio
              srcSet
              src
              sizes
            }
          }
        }
      }
    }
  `)
  const navigation = data.settingsYaml

  const [open, setOpen] = useState(false)
  function close() {
    setOpen(false)
  }

  return (
    <nav className="absolute top-0 z-50 left-0 right-0 bg-gradient-to-b from-dark-7 to-transparent">
      <div className={'px-5 ' + (open ? 'bg-dark-8 bg-opacity-90' : '')}>
        <div className="relative flex items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 text-opacity-80 hover:text-gray-100 bg-opacity-80 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-gray-600 transition duration-150 ease-in-out"
              aria-expanded="false"
            >
              <span className="sr-only">Menü öffnen</span>
              <svg
                className={'h-6 w-6 ' + (open ? 'hidden' : 'block')}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={'h-6 w-6 ' + (open ? 'block' : 'hidden')}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <h1 className="border-dark-2 border-2 border-t-0 rounded-lg overflow-hidden rounded-t-none">
                  <Img
                    className="w-20 lg:w-32"
                    fluid={navigation.logo.childImageSharp.fluid}
                    alt="Alexander v.P.H. Dobbrunz"
                  />
                </h1>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="flex space-x-4 justify-center mt-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <NavigationLink to="#philosophie">Philosophie</NavigationLink>
                <NavigationLink to="#projekte">
                  Wirtschaftliches Engagement
                </NavigationLink>
                <NavigationLink to="#projekte">
                  Soziales &amp; Gesellschaftliches
                </NavigationLink>
                <NavigationLink to="#kontakt">Kontakt</NavigationLink>
              </div>
            </div>
            <div className="hidden lg:w-2/12"></div>
          </div>
        </div>
      </div>
      <div
        className={
          'lg:hidden shadow-md relative ' + (open ? 'block' : 'hidden')
        }
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-8 bg-opacity-90">
          <div className="block">
            <NavigationLink onClick={close}>Philosophie</NavigationLink>
          </div>
          <div className="block">
            <NavigationLink onClick={close}>
              Wirtschaftliches Engagement
            </NavigationLink>
          </div>
          <div className="block">
            <NavigationLink onClick={close}>
              Soziales &amp; Gesellschaftliches
            </NavigationLink>
          </div>
          <div className="block">
            <NavigationLink onClick={close}>Kontakt</NavigationLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
