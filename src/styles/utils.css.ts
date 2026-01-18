import { style } from '@vanilla-extract/css';

export const flexColumn = style({
  display: 'flex',
  flexDirection: 'column',
});

export const flexRow = style({
  display: 'flex',
  flexDirection: 'row',
});

export const flexCenter = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const flexBetween = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const alignCenter = style({
  alignItems: 'center',
});
