import React, { useEffect, useRef, useState } from 'react'
import Project from './Project'

export default function Projects({ projects }) {
  /*
   ** Stuff to make the projects move horizontally
   */
  const projectTrack = useRef()
  const projectProgress = useRef()

  const [progress, setProgress] = useState(0)
  const [trackWidth, setTrackWidth] = useState('auto')
  const [trackHeight, setTrackHeight] = useState('auto')

  const update = () => {
    // progress track has h-screen class => it has the same height as the screen
    const bcrTrack = projectTrack.current.getBoundingClientRect()
    const screenHeight = bcrTrack.height

    // calculate how far the project has moved out of the viewport and where the screen is
    const bcrProgress = projectProgress.current.getBoundingClientRect()
    const end = bcrProgress.height - screenHeight
    const measurement = -bcrProgress.y

    // calulate the progress and make it so that it is between 0 and 1
    const progress = Math.max(Math.min(measurement / end, 1), 0)

    setProgress(progress)
  }

  useEffect(() => {
    if (window.innerWidth >= 1024) setTrackWidth(`${projects.length * 100}vw`)
    else setTrackWidth('auto')
  }, [projects.length])

  useEffect(() => {
    if (window.innerWidth >= 1024) setTrackHeight(`${projects.length * 1000}px`)
    else setTrackHeight('auto')
  }, [projects.length])

  const getTranslate = () => {
    const width = projects.length * 100 - 90
    return progress * width * -1
  }

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      window.addEventListener('scroll', update)
      return () => {
        window.removeEventListener('scroll', update)
      }
    }
    return () => {}
  }, [])

  /*
   ** Render
   */
  return (
    <section
      id="projekte"
      className="bg-gradient-to-b from-dark-8 to-dark-7 relative"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-x-hidden max-w-full max-h-full">
        <div
          className="absolute bottom-0 right-0 w-0 h-0 border-transparent"
          style={{ borderWidth: '110vh', borderRightColor: 'rgb(2 39 94)' }}
        ></div>
      </div>
      <div
        ref={projectProgress}
        id="project-progress"
        className="relative w-full"
        style={{ height: trackHeight }}
      >
        <div className="lg:absolute top-0 bottom-0 left-0 right-0 z-10">
          <div className="lg:sticky top-0 overflow-hidden w-full lg:h-screen">
            <div
              ref={projectTrack}
              id="project-track"
              className="flex flex-col lg:flex-row flex-nowrap lg:h-screen align-items-center"
              style={{
                width: trackWidth,
                transform: `translateX(${getTranslate()}vw)`
              }}
            >
              {projects.map((project) => (
                <Project
                  title={project.name}
                  image={project.image}
                  category={project.category}
                  description={project.description}
                  key={project.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
