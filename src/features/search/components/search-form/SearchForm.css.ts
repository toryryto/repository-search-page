import { style } from '@vanilla-extract/css';
import { flexBetween, flexCenter } from '@/styles/utils.css';

const form = style([
  flexBetween,
  {
    gap: 12,
    width: '100%',
    padding: '20px 0',
  },
]);

const input = style({
  flex: 1,
  borderRadius: 12,
  border: '1px solid #9a9a9a',
  padding: '12px 8px',

  '::placeholder': {
    color: '#9a9a9a',
  },

  '::-webkit-search-cancel-button': {
    cursor: 'pointer',
  },
});

const button = style([
  flexCenter,
  {
    width: 62,
    padding: 12,
    borderRadius: 12,
    background: '#252525',
    border: 'none',
  },
]);

const buttonText = style({
  color: '#fff',
  fontWeight: 700,
});

export const searchFormStyles = {
  form,
  input,
  button,
  buttonText,
};
