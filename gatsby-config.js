require('dotenv').config();

const path = require('path');

module.exports = ({ shopifyOptions, navigation }) => ({
  siteMetadata: {
    title: 'Poulo | Shopify&Gatsby Theme',
    description: `
      This is a shop theme. The description will be showed in SEO results on products that don't have them.
    `,
    canonicalUrl: 'https://example.com',
    lang: 'en',
    shop: {
      name: 'Poulo, Inc.',
      url: 'https://example.com',
      logo: path.join(__dirname, 'src', 'images', 'gatsby-icon.png'),
    },
    navigation: {
      navStyle: 'stacked',
      menu: [
        {
          link: '/products',
          displayName: 'Products',
        },
      ],
      ...navigation,
    },
    // productCategories: [...shopifyOptions.productCategories],
    social: {
      twitter: '@saifadin',
      instagram: '',
      facebook: '',
      pinterest: '',
    },
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-shopify',
      options: {
        verbose: true,
        ...shopifyOptions,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, 'src', 'pages'),
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
  ],
});
