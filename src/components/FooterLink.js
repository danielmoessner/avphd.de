import React from 'react'

function FooterLink({ children, href, reverse }) {
  return (
    <a
      className={
        'text-alex-2 block pl-1 py-2 rounded-md hover:text-alex-1 text-opacity-80 transform transition duration-150 ease-in-out mb-1 ' +
        (reverse ? 'hover:-translate-x-1' : 'hover:translate-x-1')
      }
      href={href}
    >
      {children}
    </a>
  )
}

FooterLink.defaultProps = {
  href: '#',
  reverse: false
}

export default FooterLink
