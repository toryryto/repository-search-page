import { style, keyframes } from '@vanilla-extract/css';
import { flexCenter } from '../../../styles/utils.css';

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const wrapper = style([
  flexCenter,
  {
    gap: 8,
    padding: 16,
  },
]);

const spinner = style({
  width: 20,
  height: 20,
  border: '2px solid #e5e5e5',
  borderTop: '2px solid #666',
  borderRadius: '50%',
  animation: `${spin} 0.8s linear infinite`,
});

const text = style({
  fontSize: 14,
  color: '#666',
});

export const loadingSpinnerStyles = { wrapper, spinner, text };
