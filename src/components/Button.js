import React from 'react'

export default function Button({ href, children }) {
  return (
    <a
      href={href}
      className="w-full md:w-auto text-center rounded-lg py-3 px-4 text-lg bg-alex-2 text-alex-8 font-lg hover:-translate-y-1 block transform hover:bg-alex-1 transition duration-150 ease-in-out focus:outline-none ring-0 ring-yellow-700 active:bg-alex-6"
    >
      {children}
    </a>
  )
}

Button.defaultProps = {
  href: '#'
}
