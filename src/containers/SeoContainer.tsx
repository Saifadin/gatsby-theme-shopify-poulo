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

type SEOProps = {
  description?: string;
  lang?: string;
  title?: string;
  meta?: Array<MetaWithName | MetaWithProperty>;
  keywords?: Array<string>;
};

const SEO = ({ description = '', lang = 'en', meta = [], keywords = [], title = '' }) => {
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
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,700|Roboto:300,400,700',
          rel: 'stylesheet',
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
};

export default SEO;
