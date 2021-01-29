import React, { useEffect, useRef, useState } from 'react'
import Project from './Project'

export default function Projects({ projects }) {
  /*
   ** Stuff to make the projects move horizontally
   */
  const projectTrack = useRef()
  const projectProgress = useRef()

  const [progress, setProgress] = useState(0)

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

  const getTrackWidth = () => {
    return projects.length * 100
  }

  const getTranslate = () => {
    const width = getTrackWidth() - 90
    return progress * width * -1
  }

  useEffect(() => {
    window.addEventListener('scroll', update)
  }, [])

  /*
   ** Render
   */
  return (
    <section className="bg-gradient-to-b from-dark-8 to-dark-7 relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-x-hidden max-w-full max-h-full">
        <div
          className="absolute bottom-0 right-0 w-0 h-0 border-transparent"
          style={{ borderWidth: '110vh', borderRightColor: 'rgb(155 67 81)' }}
        ></div>
      </div>
      <div
        ref={projectProgress}
        id="project-progress"
        className="relative w-full"
        style={{ height: `${getTrackWidth()}0px` }}
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
          <div className="sticky top-0 overflow-hidden w-full h-screen">
            <div
              ref={projectTrack}
              id="project-track"
              className="flex flex-row flex-nowrap h-screen align-items-center"
              style={{
                width: `${getTrackWidth()}vw`,
                transform: `translateX(${getTranslate()}vw)`
              }}
            >
              {projects.map((project) => (
                <Project
                  title={project.name}
                  image={project.image}
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
