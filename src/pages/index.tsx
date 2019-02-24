import React, { useState } from 'react';
import find from 'lodash/find';

import SeoContainer from '../containers/SeoContainer';
import { graphql } from 'gatsby';

// @ts-ignore
import Hero from '../components/Hero';
import Section from '../components/Section';
import { Promotion } from '../styles/hero-bgs';
import { ColoredSection } from '../styles/page-styles';
import ProductCardList from '../components/ProductCardList';

export default ({ data: { allShopifyProduct } }: any) => {
  const [products] = useState(allShopifyProduct.edges);

  return (
    <div>
      <SeoContainer title="Welcome" />
      <Hero fullWidth height="50vh" background={<Promotion />}>
        <h1>Homepage</h1>
        <h3>What a shop</h3>
      </Hero>
      <Section fullWidth>
        <h2>Wazzup, we have the best content</h2>
        <h4>Look stylish all the time, believe us! We tried not to look good, but it just doesn't work!</h4>
        <ProductCardList products={products} handles={['hanra-shirt', 'henning-ss-crew', 'rise-crew', 'posie-crew']} />
      </Section>
      <ColoredSection>
        <h2>Wazzup, we have the best content</h2>
        <h4>Look stylish all the time, believe us! We tried not to look good, but it just doesn't work!</h4>
        <ProductCardList products={products} handles={['hanra-shirt', 'henning-ss-crew', 'rise-crew', 'posie-crew']} />
      </ColoredSection>
    </div>
  );
};

export const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          id
          shopifyId
          handle
          title
          description
          tags
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images {
            localFile {
              childImageSharp {
                fixed(width: 500) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
