import { style } from '@vanilla-extract/css';

import { flexColumn } from '@/styles/utils.css';

const wrapper = style([
  flexColumn,
  {
    gap: 20,
    maxWidth: 600,
    margin: '0 auto',
    padding: '0 16px',
    background: '#fff',
    height: '100vh',
    overflow: 'hidden',
  },
]);

const header = style({
  width: '100%',
  height: 60,
  padding: '18px 0',
});

const headerText = style({
  fontWeight: 600,
});

const section = style([
  flexColumn,
  {
    gap: 20,
    flex: 1,
    overflowY: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
]);

export const layoutStyles = {
  wrapper,
  header,
  headerText,
  section,
};
