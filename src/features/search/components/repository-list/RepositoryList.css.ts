import { style } from '@vanilla-extract/css';

import { flexColumn } from '@/styles/utils.css';

const list = style([
  flexColumn,
  {
    gap: 0,
    margin: 0,
    listStyle: 'none',
  },
]);

const loading = style({
  width: '100%',
  padding: '18px 0',
});

export const repositoryListStyles = {
  list,
  loading,
};
