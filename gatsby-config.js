require('dotenv').config();

const path = require('path');

module.exports = ({ shopifyOptions, dirName, navigation, colorMap, paymentMethods, activatePWA = true }) => ({
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
      twitter: '',
      instagram: '',
      facebook: '',
      pinterest: '',
      snapchat: '',
    },
    colorMap: [...colorMap, { key: 'Black', value: '#000' }, { key: 'White', value: '#fff' }],
    shopifyOptions,
    paymentMethods: paymentMethods.length === 0 ? [''] : paymentMethods,
    // paymentMethods: ['AmazonPay', 'Amex', 'ApplePay', 'DinersClub', 'Discover', 'Jcb', 'Mastercard', 'Paypal', 'Visa'],
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
        path: `${dirName}/src/images`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    activatePWA && 'gatsby-plugin-offline',
  ].filter(Boolean),
});
