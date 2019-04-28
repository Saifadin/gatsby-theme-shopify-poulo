import * as React from 'react';
import { storiesOf } from '@storybook/react';
// @ts-ignore
import { action } from '@storybook/addon-actions';

import Button from './index';

storiesOf('Button', module)
  .add('light', () => <Button onClick={action('clicked')}>Light Button</Button>)
  .add('dark', () => (
    <Button appearance="dark" onClick={action('clicked')}>
      Hello Button
    </Button>
  ))
  .add('light - fullwidth', () => (
    <Button fullWidth={true} onClick={action('clicked')}>
      Light Button
    </Button>
  ))
  .add('dark - fullwidth', () => (
    <Button appearance="dark" fullWidth={true} onClick={action('clicked')}>
      Hello Button
    </Button>
  ));
