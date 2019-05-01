require('dotenv').config();

const path = require('path');

module.exports = ({ shopifyOptions, navigation, colorMap }) => ({
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
    },
    navigation: {
      menu: [
        {
          link: '/products',
          displayName: 'Products',
          subMenu: [],
        },
      ],
      ...navigation,
    },
    // productCategories: [...shopifyOptions.productCategories],
    footerDisclaimer:
      '© 2019 | Made with <a href="https://www.gatsbyjs.org/" rel="noopener,noreferrer" target="_blank">Gatsby</a> and <a href="https://github.com/Saifadin/test-shopify-gatsby" rel="noopener,noreferrer"  target="_blank">Poulo</a>',
    social: {
      twitter: 'saifadin',
      instagram: 'saifadin',
      facebook: 'osamah.aldoaiss',
      pinterest: 'saifadin',
      snapchat: 'aldoaiss',
    },
    colorMap: [...colorMap, { key: 'Black', value: '#000' }, { key: 'White', value: '#fff' }],
    shopifyOptions,
    paymentMethods: ['AmazonPay', 'Amex', 'ApplePay', 'DinersClub', 'Discover', 'Jcb', 'Mastercard', 'Paypal', 'Visa'],
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: path.join(__dirname, 'src', 'pages'),
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-developer'],
      },
    },
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
  ],
});
