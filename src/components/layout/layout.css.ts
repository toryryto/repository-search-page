import { style } from '@vanilla-extract/css';

const wrapper = style({
  maxWidth: '600px',
  margin: '0 auto',
  padding: '0 16px',
});

const header = style({
  width: '100%',
  height: 48,
  padding: 18,
});

const section = style({
  padding: '0 18px',
});

export const layoutStyles = {
  wrapper,
  header,
  section,
};
