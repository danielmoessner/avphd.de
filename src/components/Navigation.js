import React, { useState } from 'react'
import Container from './Container'
import NavigationLink from './NavigationLink'

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-yellow-800 bg-opacity-10">
      <Container>
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 text-opacity-80 hover:text-gray-200 hover:bg-yellow-900 bg-opacity-80 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-gray-600 transition duration-150 ease-in-out"
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
              <h1 className="text-original-8 text-opacity-80 font-semibold font-serif px-2 py-0.5 border-0 lg:border border-original-8 rounded">
                Alexander v.P.H. Dobbrunz
              </h1>
            </div>
            <div className="hidden lg:block lg:ml-6">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <NavigationLink href="#">Philosophie</NavigationLink>
                <NavigationLink href="#">
                  Wirtschaftliches Engagement
                </NavigationLink>
                <NavigationLink href="#">
                  Soziales &amp; Gesellschaftliches
                </NavigationLink>
                <NavigationLink href="#">Kontakt</NavigationLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className={'lg:hidden shadow-md ' + (open ? 'block' : 'hidden')}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <NavigationLink>Philosophie</NavigationLink>
          <NavigationLink>Wirtschaftliches Engagement</NavigationLink>
          <NavigationLink>Soziales &amp; Gesellschaftliches</NavigationLink>
          <NavigationLink>Kontakt</NavigationLink>
        </div>
      </div>
    </nav>
  )
}
