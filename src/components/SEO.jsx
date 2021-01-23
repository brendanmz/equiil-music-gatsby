import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

const SEO = ({ description, meta, image: metaImage, title }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            description
            keywords
            siteUrl
          }
        }
      }
    `}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description
      const image =
        metaImage && metaImage.src
          ? `${data.site.siteMetadata.siteUrl}${metaImage.src}`
          : null
      return (
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
          defaultTitle={title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: data.site.siteMetadata.keywords,
            },
            {
              property: 'og:title',
              content: title,
            },
            {
              property: 'og:description',
              content: metaDescription,
            },
            {
              name: 'twitter:creator',
              content: data.site.siteMetadata.author,
            },
            {
              name: 'twitter:title',
              content: title,
            },
            {
              name: 'twitter:description',
              content: metaDescription,
            },
          ]
            .concat(
              metaImage
                ? [
                    {
                      property: 'og:image',
                      content: image,
                    },
                    {
                      property: 'og:image:width',
                      content: metaImage.width,
                    },
                    {
                      property: 'og:image:height',
                      content: metaImage.height,
                    },
                    {
                      name: 'twitter:card',
                      content: 'summary_large_image',
                    },
                  ]
                : [
                    {
                      name: 'twitter:card',
                      content: 'summary',
                    },
                  ],
            )
            .concat(meta)}
        >
          <base href={data.site.siteMetadata.siteUrl} />
        </Helmet>
      )
    }}
  />
)
SEO.defaultProps = {
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
}

export default SEO
