import React from 'react';
import get from 'lodash/get';

import { ProductImageWrapper, ProductImage } from './styles';

type ImageProps = {
  images: Array<any>;
};

const CardImage: React.FunctionComponent<ImageProps> = ({ images }) => {
  if (images.length < 1) return null;
  const image = get(images, '0.localFile.childImageSharp.fixed.src');

  return (
    <ProductImageWrapper>
      <ProductImage src={image} />
    </ProductImageWrapper>
  );
};

export default CardImage;
