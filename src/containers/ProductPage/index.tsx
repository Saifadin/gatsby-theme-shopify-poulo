import React from 'react';
import { graphql } from 'gatsby';

import SeoContainer from '../../containers/SeoContainer';
import PageLayout from '../../containers/PageLayout';
import ImageSlider from './ProductImages';
import ProductDetails from './ProductDetails';
import { ProductHeader, ProductHeaderContainer } from './styles';

export interface Image {
  id: string;
  localFile: {
    childImageSharp: {
      fluid: {
        src: string;
      };
    };
  };
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  productType: string;
  description: string;
  descriptionHtml: string;
  shopifyId: string;
  options: Array<{
    id: string;
    name: string;
    values: string[];
  }>;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  variants: Array<{
    id: string;
    title: string;
    price: number;
    availableForSale: boolean;
    shopifyId: string;
    compareAtPrice: number;
    selectedOptions: Array<{
      name: string;
      value: string;
    }>;
  }>;
  images: Image[];
}

interface Props {
  data: {
    shopifyProduct: ShopifyProduct;
  };
  transparentHeader?: boolean;
  transparentColor?: string;
  transparentLogo?: string;
  scrollingLogo?: string;
  cartCountColor?: string;
  buttonAppearance?: string;
}

const ProductPage: React.FC<Props> = ({
  data,
  children,
  transparentHeader,
  transparentLogo,
  scrollingLogo,
  cartCountColor,
  transparentColor,
  buttonAppearance,
}) => {
  const product = data.shopifyProduct;

  return (
    <PageLayout
      transparentHeader={transparentHeader}
      transparentLogo={transparentLogo}
      scrollingLogo={scrollingLogo}
      cartCountColor={cartCountColor}
      transparentColor={transparentColor}>
      <SeoContainer title={product.title} description={product.description} />
      <ProductHeader>
        <ProductHeaderContainer>
          <ImageSlider images={product.images} />
          <ProductDetails product={product} buttonAppearance={buttonAppearance} />
        </ProductHeaderContainer>
      </ProductHeader>
      <div>{children}</div>
    </PageLayout>
  );
};

export default ProductPage;
