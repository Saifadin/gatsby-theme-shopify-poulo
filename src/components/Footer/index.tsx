import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  FaCcAmex,
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcDinersClub,
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaSnapchat,
} from 'react-icons/fa';
import forEach from 'lodash/forEach';

import { FooterBackdrop, FooterWrapper, DisclaimerPayment, Disclaimer, PaymentMethods, SocialIcons, SocialIcon } from './styles';

const getIcon = (iconName: string): React.ReactNode | null => {
  switch (iconName) {
    case 'AmazonPay':
      return <FaCcAmazonPay key={iconName} size={32} />;
    case 'Amex':
      return <FaCcAmex key={iconName} size={32} />;
    case 'ApplePay':
      return <FaCcApplePay key={iconName} size={32} />;
    case 'DinersClub':
      return <FaCcDinersClub key={iconName} size={32} />;
    case 'Discover':
      return <FaCcDiscover key={iconName} size={32} />;
    case 'Jcb':
      return <FaCcJcb key={iconName} size={32} />;
    case 'Mastercard':
      return <FaCcMastercard key={iconName} size={32} />;
    case 'Paypal':
      return <FaCcPaypal key={iconName} size={32} />;
    case 'Visa':
      return <FaCcVisa key={iconName} size={32} />;
    case 'twitter':
      return <FaTwitter key={iconName} size={32} />;
    case 'facebook':
      return <FaFacebook key={iconName} size={32} />;
    case 'instagram':
      return <FaInstagram key={iconName} size={32} />;
    case 'pinterest':
      return <FaPinterest key={iconName} size={32} />;
    case 'snapchat':
      return <FaSnapchat key={iconName} size={32} />;
    default:
      null;
  }
};

const getURl = (key: string, value: string): string => {
  if (key === 'twitter') return `https://twitter.com/${value}`;
  if (key === 'facebook') return `https://facebook.com/${value}`;
  if (key === 'instagram') return `https://instagram.com/${value}`;
  if (key === 'pinterest') return `https://pinterest.com/${value}`;
  if (key === 'snapchat') return `https://snapchat.com/add/${value}`;
  return '';
};

const Footer = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          footerDisclaimer
          social {
            twitter
            facebook
            instagram
            pinterest
            snapchat
          }
          paymentMethods
        }
      }
    }
  `);

  let socialMedia: Array<React.ReactNode> = [];
  forEach(siteMetadata.social, (value: string, key: string) => {
    if (!value) return;
    socialMedia.push(
      <SocialIcon href={getURl(key, value)} target="_blank" key={key}>
        {getIcon(key)}
      </SocialIcon>
    );
  });

  return (
    <FooterBackdrop>
      <FooterWrapper>
        <DisclaimerPayment>
          <PaymentMethods>
            {siteMetadata.paymentMethods.map((paymentMethod: string) => {
              return getIcon(paymentMethod);
            })}
          </PaymentMethods>
          <Disclaimer dangerouslySetInnerHTML={{ __html: siteMetadata.footerDisclaimer }} />
        </DisclaimerPayment>
        <SocialIcons>{socialMedia.map(entry => entry)}</SocialIcons>
      </FooterWrapper>
    </FooterBackdrop>
  );
};

export default Footer;
