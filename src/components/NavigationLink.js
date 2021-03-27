import React from 'react'
import { Link } from 'gatsby'

export default function NavigationLink({ children, to, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-dark-2 inline-block px-3 py-2 tracking-wide rounded-md text-base text-opacity-80 hover:translate-x-1 lg:hover:translate-x-0 lg:hover:-translate-y-1 transform transition duration-150 ease-in-out uppercase font-medium"
    >
      {children}
    </Link>
  )
}

NavigationLink.defaultProps = {
  to: '#',
  onClick: () => {}
}
