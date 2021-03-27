import CMS from 'netlify-cms-app'
import { de } from 'netlify-cms-locales'
import React from 'react'
import Project from '../components/Project'
import '../styles/global.css'

// Localization
CMS.registerLocale('de', de)

// Previews
const ProjectPreview = ({ entry, widgetFor }) => (
  <div className="pt-2 pr-2">
    <div className="bg-dark-7 py-32">
      <Project
        preview
        image={widgetFor('image')}
        title={entry.getIn(['data', 'name'])}
        category={entry.getIn(['data', 'category'])}
        description={entry.getIn(['data', 'description'])}
      />
    </div>
  </div>
)

CMS.registerPreviewTemplate('project', ProjectPreview)
