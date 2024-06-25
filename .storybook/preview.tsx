import React from 'react';
import { RecoilRoot } from 'recoil';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../src/styles/Theme';
import ModalContainer from '../src/components/common/Modal/ModalContainer';
import ToastContainer from '../src/components/common/Toast/ToastContainer';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { handles: ['mouseover', 'click button'] },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={Theme}>
        <RecoilRoot>
          <Story />
          <ModalContainer />
          <ToastContainer />
        </RecoilRoot>
      </ThemeProvider>
    ),
  ],
};

export default preview;
