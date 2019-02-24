import React, { useState } from 'react';
import { graphql } from 'gatsby';

// @ts-ignore
import Hero from '../components/Hero';
import SeoContainer from '../containers/SeoContainer';
import Section, { SectionTitle, SectionSubTitle, SectionDescription } from '../components/Section';
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
        <SectionTitle>Wazzup, we have the best content</SectionTitle>
        <SectionDescription>
          Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. I was part
          of something special. This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power windows. God help us, we're
          in the hands of engineers.
        </SectionDescription>
        <ProductCardList products={products} handles={['hanra-shirt', 'henning-ss-crew', 'rise-crew', 'posie-crew']} />
      </Section>
      <ColoredSection>
        <SectionTitle>Wazzup, we have the best content</SectionTitle>
        <SectionSubTitle>Look stylish all the time, believe us! We tried not to look good, but it just doesn't work!</SectionSubTitle>
        <ProductCardList products={products} handles={['rise-crew', 'posie-crew', 'hanra-shirt', 'henning-ss-crew']} />
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
