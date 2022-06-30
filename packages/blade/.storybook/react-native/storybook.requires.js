/* do not change this file, it is auto generated by storybook. */

import { configure, addDecorator, addParameters, addArgsEnhancer } from '@storybook/react-native';

import '@storybook/addon-ondevice-notes/register';
import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-backgrounds/register';
import '@storybook/addon-ondevice-actions/register';

import { argsEnhancers } from '@storybook/addon-actions/dist/modern/preset/addArgs';

import { decorators, parameters } from './preview';

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));

const getStories = () => {
  return [
    require('../../src/components/Button/Button/Button.stories.tsx'),
    require('../../src/components/Icons/Icons.stories.tsx'),
    require('../../src/components/SkipNav/SkipNav.stories.tsx'),
    require('../../src/components/Typography/BaseText/BaseText.stories.tsx'),
    require('../../src/components/Typography/Heading/Heading.stories.tsx'),
    require('../../src/components/Typography/Text/Text.stories.tsx'),
    require('../../src/components/Typography/Title/Title.stories.tsx'),
    require('../../src/components/VisuallyHidden/VisuallyHidden.stories.tsx'),
    require('../../src/storybook-recipes/AccessibilityInterop/AccessibilityInteropDemo.stories.tsx'),
    require('../../src/storybook-recipes/SimpleCardWithTokens/CardWithTokens.stories.tsx'),
    require('../../src/components/Button/BaseButton/BaseButton.stories.internal.tsx'),
  ];
};

configure(getStories, module, false);
