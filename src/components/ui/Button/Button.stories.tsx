import React from 'react';
// import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  component: Button,
  title: 'button',
  text: 'some',
  onHandleClick: () => console.log('object'),
};

// export const actionButton = {
//   onHandleClick: action('working'),
// };

export const Default = () => (
  <Button text="default" onHandleClick={() => console.log('hello')} />
);
