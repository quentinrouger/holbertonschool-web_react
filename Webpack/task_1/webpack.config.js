import { resolve } from 'path';

export const mode = 'production';
export const entry = './js/dashboard_main.js';
export const output = {
  filename: 'bundle.js',
  path: resolve(__dirname, 'public'),
};
