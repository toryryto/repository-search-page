import { style } from '@vanilla-extract/css';

const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 4,
  background: 'transparent',
  border: 'none',
  borderRadius: 4,
  color: '#656d76',
  transition: 'color 0.15s ease',
  flexShrink: 0,
});

const filled = style({
  color: '#0969da',
});

const outline = style({
  color: '#9a9a9a',
});

export const bookmarkButtonStyles = {
  button,
  filled,
  outline,
};
