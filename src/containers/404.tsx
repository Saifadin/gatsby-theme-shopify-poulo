import React from 'react';
import { Section, SectionTitle, SectionDescription } from 'page-kit';

import SeoContainer from './SeoContainer';

interface ErrorProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  seoTitle: string;
  seoDescription?: string;
}

const ErrorPage: React.FC<ErrorProps> = ({ children, title, description, seoTitle, seoDescription }) => {
  return (
    <div>
      <SeoContainer title={seoTitle || 'Did you get lost?'} description={seoDescription || ''} />
      <Section fullWidth={true}>
        <SectionTitle>{title || 'Did you get lost?'}</SectionTitle>
        <SectionDescription>
          {description ||
            'Unfortunately the link you are visiting does not exist. Please use the Menu to Navigate to an existing page or if you think this is a mistake, please contact our support team.'}
        </SectionDescription>
      </Section>
      {children}
    </div>
  );
};

export default ErrorPage;
