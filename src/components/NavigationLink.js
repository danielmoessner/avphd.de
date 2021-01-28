import React from 'react'
import { Link } from 'gatsby'

export default function NavigationLink({ children, href, onClick }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="text-dark-2 block px-3 py-2 tracking-wide rounded-md text-base text-opacity-80 hover:-translate-y-1 transform transition duration-150 ease-in-out uppercase font-medium"
    >
      {children}
    </Link>
  )
}

NavigationLink.defaultProps = {
  href: '#',
  onClick: () => {}
}
