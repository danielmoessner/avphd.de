import React, { useEffect, useRef, useState } from 'react'
import Project from './Project'

export default function Projects() {
  const projectTrack = useRef()
  const projectProgress = useRef()

  const [progress, setProgress] = useState(0)

  const update = () => {
    // progress track has h-screen class => it has the same height as the screen
    const bcrTrack = projectTrack.current.getBoundingClientRect()
    const screenHeight = bcrTrack.height

    //
    const bcrProgress = projectProgress.current.getBoundingClientRect()
    const start = 0
    const end = bcrProgress.height - screenHeight
    const measurement = -bcrProgress.y

    //
    const progress = Math.max(Math.min(measurement / end, 1), 0)

    setProgress(progress)
  }

  const getTranslate = () => {
    const width = 200 - 100
    return progress * width * -1
  }

  useEffect(() => {
    window.addEventListener('scroll', update)
  }, [])

  return (
    <section className="bg-gradient-to-b from-dark-8 to-dark-7 relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-x-hidden max-w-full max-h-full">
        <div className="text-3xl text-white">{progress}</div>
        <div
          className="absolute bottom-0 left-0 w-0 h-0 border-transparent"
          style={{ borderWidth: '100vw', borderBottomColor: '#3a1751' }}
        ></div>
      </div>

      <div
        ref={projectProgress}
        id="project-progress"
        className="relative w-full"
        style={{ height: '3000px' }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
          <div className="sticky top-0 overflow-hidden w-full h-screen">
            <div
              ref={projectTrack}
              id="project-track"
              className="flex flex-row flex-nowrap h-screen align-items-center"
              style={{
                width: '200vw',
                transform: `translateX(${getTranslate()}vw)`
              }}
            >
              <Project />
              <Project />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
