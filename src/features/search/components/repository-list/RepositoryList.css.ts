import { style } from '@vanilla-extract/css';
import { flexColumn } from '../../../../styles/utils.css';

const list = style([
  flexColumn,
  {
    gap: 0,
    margin: 0,
    padding: '0 0 40px 0',
    listStyle: 'none',
  },
]);

const loading = style({
  width: '100%',
  height: '60px',
});

export const repositoryListStyles = {
  list,
  loading,
};
