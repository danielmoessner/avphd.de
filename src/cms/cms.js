import CMS from 'netlify-cms-app'
import { de } from 'netlify-cms-locales'
import React from 'react'
import Project from '../components/Project'

// Localization
CMS.registerLocale('de', de)

// Previews
const ProjectPreview = ({ entry, widgetFor }) => (
  <div className="bg-dark-7">
    <Project
      preview
      image={widgetFor('image')}
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
    />
  </div>
)

CMS.registerPreviewTemplate('project', ProjectPreview)
