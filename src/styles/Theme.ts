const color = {
  main: '#d9d9d9',
} as const;

const text = {
  large: {
    fontSize: '18px',
    lineHeight: '28px',
  },
  medium: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  small: {
    fontSize: '14px',
    lineHeight: '20px',
  },
} as const;

export const Theme = {
  color,
  text,
};
