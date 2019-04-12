import React from 'react';
import { graphql } from 'gatsby';

import SeoContainer from '../../containers/SeoContainer';
import PageLayout from '../../containers/PageLayout';
import ImageSlider from './ProductImages';
import ProductDetails from './ProductDetails';
import { Product, ProductHeader, ProductHeaderContainer, ProductDescription } from './styles';

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct;

  return (
    <PageLayout>
      <Product>
        <SeoContainer title={product.title} description={product.description} />
        <ProductHeader>
          <ProductHeaderContainer>
            <ImageSlider images={product.images} />
            <ProductDetails product={product} />
          </ProductHeaderContainer>
        </ProductHeader>
        <ProductDescription>
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
        </ProductDescription>
      </Product>
    </PageLayout>
  );
};

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
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
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        compareAtPrice
        selectedOptions {
          name
          value
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default ProductPage;
