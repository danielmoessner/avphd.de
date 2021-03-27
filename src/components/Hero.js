import React, { useState, useCallback, useRef, useEffect } from 'react'
import Img from 'gatsby-image'
import gsap from 'gsap'

function Hero({ section }) {
  const background = useRef()
  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)

  useEffect(() => {
    gsap.to('#background', { x: translateX, y: translateY, duration: 1 })
  })

  // eslint-disable-next-line
  const onMouseMove = useCallback((e) => {
    let xPos = e.nativeEvent.offsetX / background.current.offsetWidth
    xPos = Math.min(xPos, 1)
    let xPosCentered = (xPos - 0.5) * -2
    let xShift = 20 * xPosCentered
    setTranslateX(xShift)
    let yPos = e.nativeEvent.offsetY / background.current.offsetHeight
    yPos = Math.min(yPos, 1)
    let yPosCentered = (yPos - 0.5) * -2
    let yShift = 20 * yPosCentered
    setTranslateY(yShift)
  })

  return (
    // eslint-disable-next-line
    <header
      onMouseMove={onMouseMove}
      className="overflow-hidden"
      ref={background}
    >
      <div className={'-m-5 '} id="background">
        <div className="aspect-w-16 aspect-h-10">
          <Img
            fluid={section.image.childImageSharp.fluid}
            style={{ position: 'absolute' }}
          />
        </div>
      </div>
    </header>
  )
}

export default Hero
