import React from 'react';
import get from 'lodash/get';

import { ProductImageWrapper, ProductImage } from './styles';

interface ImageProps {
  images: any[];
  title: string;
}

const CardImage: React.FunctionComponent<ImageProps> = ({ images, title }) => {
  if (images.length < 1) return null;
  const image = get(images, '0.localFile.childImageSharp.fixed.src');

  return (
    <ProductImageWrapper>
      <ProductImage src={image} alt={title} />
    </ProductImageWrapper>
  );
};

export default CardImage;
