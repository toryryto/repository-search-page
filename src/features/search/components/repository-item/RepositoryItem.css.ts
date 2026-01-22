import { style } from '@vanilla-extract/css';
import {
  alignCenter,
  flexBetween,
  flexColumn,
  flexRow,
} from '@/styles/utils.css';

const wrapper = style([
  flexColumn,
  {
    gap: 12,
    padding: '16px 0',
    borderBottom: '1px solid #eaeaea',
    listStyle: 'none',
  },
]);

const header = style([
  flexColumn,
  {
    gap: 8,
  },
]);

const title = style({
  fontSize: 18,
  fontWeight: 600,
  lineHeight: 1.4,
});

const titleRow = style([
  flexBetween,
  {
    width: '100%',
  },
]);

const description = style({
  color: '#656d76',
  fontSize: 14,
  lineHeight: 1.5,
});

const meta = style([
  flexRow,
  alignCenter,
  {
    gap: 16,
    flexWrap: 'wrap',
    fontSize: 12,
    color: '#656d76',
  },
]);

const language = style([
  flexRow,
  alignCenter,
  {
    gap: 4,
  },
]);

const stats = style([
  flexRow,
  alignCenter,
  {
    gap: 12,
    margin: 0,
  },
]);

const statItem = style([
  flexRow,
  alignCenter,
  {
    gap: 4,
    listStyle: 'none',
  },
]);

const license = style([
  flexRow,
  alignCenter,
  {
    gap: 4,
  },
]);

const reactionButtonWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const repositoryItemStyle = {
  wrapper,
  header,
  title,
  titleRow,
  description,
  meta,
  language,
  stats,
  statItem,
  license,
  reactionButtonWrap,
};
