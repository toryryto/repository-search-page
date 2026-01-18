import { style } from '@vanilla-extract/css';
import { flexColumn } from '../../styles/utils.css';

const list = style([
  flexColumn,
  {
    gap: 0,
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
]);

export const repositoryListStyles = {
  list,
};
