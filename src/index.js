// @flow

import React from 'react';
import { render } from 'react-dom';

import App from './app';

const rootDiv = document.createElement('div');

if (document.body && rootDiv) {
  document.body.appendChild(rootDiv);
  render(<App />, rootDiv);
}
