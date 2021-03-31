import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = function ({ url, title, description, image, isBlogPost }) {
  const data = useStaticQuery(
    graphql`
      query Favicon {
        settingsYaml(slug: { eq: "global" }) {
          favicon {
            childImageSharp {
              resize(width: 256, height: 256, cropFocus: CENTER) {
                src
              }
            }
          }
        }
      }
    `
  )
  const favicon = data.settingsYaml.favicon.childImageSharp.resize.src

  return (
    <Helmet htmlAttributes={{ lang: 'de' }}>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      {/* OpenGraph tags */}
      {url ? <meta property="og:url" content={url} /> : null}
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Different Favicons */}
      <link rel="icon" type="image/png" href={favicon} sizes="256x256" />
      <link rel="apple-touch-icon" sizes="256x256" href={favicon} />
    </Helmet>
  )
}

SEO.defaultProps = {
  isBlogPost: false
}

export default SEO
