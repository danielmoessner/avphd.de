import React, { useState, useEffect, useRef } from 'react'

function Animate({ animateClass, children }) {
  const [isIntersecting, setIntersecting] = useState(false)
  const ref = useRef()

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div
      ref={ref}
      className={
        isIntersecting
          ? 'animate__animated animate__fast ' + animateClass
          : 'opacity-0'
      }
    >
      {children}
    </div>
  )
}

export default Animate
