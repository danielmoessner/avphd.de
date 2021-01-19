import React from 'react'
import { Link } from 'gatsby'

export default function NavigationLink({ children, href, onClick }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="text-gray-800 block px-3 py-2 rounded-md text-base hover:text-alex-6 text-opacity-80 hover:-translate-y-1 transform transition duration-150 ease-in-out"
    >
      {children}
    </Link>
  )
}

NavigationLink.defaultProps = {
  href: '#',
  onClick: () => {}
}
