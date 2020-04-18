import * as React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Button can be used everywhere you need a button',
  },
  decorators: [withA11y, withKnobs],
};

export const usages = () => (
  <>
    <Button onClick={action('Clicked on simple text button')}>
      {text('Text Button', 'Simple text Button')}
    </Button>
    <br />
    <br />
    <Button onClick={action('Clicked on emojis button')}>
      {text('Emoji Button', 'Button with emojis')}
      <span role="img" aria-label="emojis">
        {text('Emojis', '😀 😎 👍 💯')}
      </span>
    </Button>
  </>
);
