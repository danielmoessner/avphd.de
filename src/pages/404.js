import React from 'react'
import Container from '../components/Container'
import { Link } from 'gatsby'

export default function Error() {
  return (
    <div className="min-w-screen min-h-screen bg-dark-7">
      <Container>
        <div className="flex items-center justify-center w-full min-h-screen">
          <div className="flex flex-col w-full max-w-sm">
            <h1 className="text-4xl text-gray-300 font-bold mb-3">404 Error</h1>
            <p className="mb-4 text-gray-400">
              Die angeforderte Seite wurde leider nicht gefunden. Bitte sagen
              Sie uns Bescheid falls der Fehler öfter auftritt.
            </p>
            <Link
              className="underline text-gray-200 hover:text-gray-100 transition ease-in-out duration-150"
              to="/"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
