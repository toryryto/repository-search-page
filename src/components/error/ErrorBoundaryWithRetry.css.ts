import { style } from '@vanilla-extract/css';

import { flexCenter, flexColumn } from '@/styles/utils.css';

const wrapper = style([
  flexColumn,
  {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    width: '100%',
    height: '100dvh',
  },
]);

const title = style({
  fontSize: 18,
  whiteSpace: 'pre-line',
  textAlign: 'center',
});

const button = style([
  flexCenter,
  {
    borderRadius: 50,
    padding: 12,
    backgroundColor: '#252525',
    color: '#fff',
  },
]);

export const errorBoundaryStyles = { wrapper, title, button };
