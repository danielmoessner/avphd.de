import React from 'react'

export default function NavigationLink({children, href}) {
  return (
    <a href={href} className="text-gray-800 block px-3 py-2 rounded-md text-base hover:text-original-6 text-opacity-80 hover:-translate-y-1 transform transition duration-150 ease-in-out">{children}</a>
  )
}

NavigationLink.defaultProps = {
  href: '#'
}