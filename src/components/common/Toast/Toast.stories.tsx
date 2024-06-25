import type { Meta } from '@storybook/react';

import Toast from '.';
import { useToast } from './useToast';

const meta = {
  title: '토스트',
  component: Toast,
  argTypes: {
    showDuration: {
      type: 'number',
    },
  },
  args: {
    children: 'Some message',
  },
} satisfies Meta<typeof Toast>;

export default meta;

export const Default = ({ ...args }) => {
  const { isOpen, open, close } = useToast();

  return (
    <>
      <button onClick={open}>Show Toast</button>
      {isOpen && (
        <Toast isOpen={isOpen} {...args} onClose={close}>
          {args.children}
        </Toast>
      )}
    </>
  );
};
