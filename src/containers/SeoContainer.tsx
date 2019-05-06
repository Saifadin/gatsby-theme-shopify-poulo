import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface MetaWithName {
  name: string;
  content: string;
}

interface MetaWithProperty {
  property: string;
  content: string;
}

interface SEOProps {
  description?: string;
  lang?: string;
  title?: string;
  link?: Array<{
    link: string;
    rel: string;
  }>;
  meta?: Array<MetaWithName | MetaWithProperty>;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({ description = '', lang = 'en', meta = [], keywords = [], link = [], title = '' }) => {
  const { site } = useStaticQuery(graphql`
    query ShopifySEO {
      site {
        siteMetadata {
          title
          description
          lang
          social {
            twitter
          }
        }
      }
    }
  `);
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: lang || site.siteMetadata.lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[...link]}
      meta={[
        {
          content: metaDescription,
          name: `description`,
        },
        {
          content: title,
          property: `og:title`,
        },
        {
          content: metaDescription,
          property: `og:description`,
        },
        {
          content: `website`,
          property: `og:type`,
        },
        {
          content: `summary`,
          name: `twitter:card`,
        },
        {
          content: site.siteMetadata.social.twitter,
          name: `twitter:creator`,
        },
        {
          content: title,
          name: `twitter:title`,
        },
        {
          content: metaDescription,
          name: `twitter:description`,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                content: keywords.join(`, `),
                name: `keywords`,
              }
            : []
        )
        .concat(meta)}
    />
  );
};

export default SEO;
