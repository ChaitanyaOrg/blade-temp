import type { Meta } from '@storybook/react';
import React from 'react';
import { getStyledPropsArgTypes } from '../BaseBox/storybookArgTypes';
import type { BoxProps } from '..';
import { Box } from '..';
import type { StyledPropsBlade as StyledPropsType } from './getStyledProps';
import { Text, Title } from '~components/Typography';
import StoryPageWrapper from '~src/_helpers/storybook/StoryPageWrapper';
import { Link } from '~components/Link';
import { Button } from '~components/Button';
import { Alert } from '~components/Alert';

if (window.top) {
  document.getElementById(window.top.location.hash)?.scrollIntoView();
}

const BoxStoryMeta = {
  title: 'Components/Layout Primitives (Box)/Styled Props',
  argTypes: getStyledPropsArgTypes({ descriptionLength: 'long' }),
  parameters: {
    docs: {
      page: () => (
        <StoryPageWrapper
          componentName="Styled Props"
          componentDescription="Styled Props that can be added to any blade component for creating different layouts"
          propsDescription="Same Styled Props are supported on all Blade Components"
          imports=""
        >
          <Alert
            isFullWidth
            isDismissible={false}
            description="This is an example styled prop story. You can also check out stories of individual blade components where you will find 'Styled Props' category in their storybook args table."
            marginTop="spacing.4"
            marginBottom="spacing.8"
          />
          <Box paddingBottom="spacing.8">
            <Title size="medium">Layout Primitives Documentation</Title>
            <Text marginTop="spacing.3">
              Check Out{' '}
              <Link href="/?path=/docs/components-layout-primitives-box-how-to-create-layouts--page#styled-props">
                &quot;Styled Props for Blade Components&quot; section from &quot;How to Create
                Layouts?&quot; Docs
              </Link>{' '}
              for interactive playground and more detailed documentation of Styled Props
            </Text>
          </Box>
        </StoryPageWrapper>
      ),
    },
  },
} as Meta<BoxProps>;

export const StyledProps = (args: StyledPropsType): JSX.Element => {
  return (
    <Box backgroundColor="surface.background.level2.lowContrast">
      <Button {...args}>Blade Button</Button>
    </Box>
  );
};

StyledProps.args = {
  margin: { base: 'spacing.2', m: 'spacing.5' },
  position: 'relative',
} as BoxProps;

export default BoxStoryMeta;
