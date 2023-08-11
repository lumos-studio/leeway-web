import React from 'react';
import Text from './text';

export default {
  title: 'Components/Text',
  component: Text,
};

export const Default = () => <Text content="Hello, Storybook!" />;
export const CustomText = () => <Text content="Custom Text Component" />;