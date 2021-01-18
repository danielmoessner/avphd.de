import React from 'react'

function FooterLink({ children, href }) {
  return (
    <a
      className="text-gray-800 block pl-1 py-2 rounded-md text-base hover:text-original-6 text-opacity-80 hover:translate-x-1 transform transition duration-150 ease-in-out mb-1"
      href={href}
    >
      {children}
    </a>
  )
}

FooterLink.defaultProps = {
  href: '#'
}

export default FooterLink
