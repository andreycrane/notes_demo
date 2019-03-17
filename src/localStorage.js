// @flow

import type { TState } from './types';

export function loadState(): TState | void {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null || serializedState === undefined) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export function saveState(state: TState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Nothing to do with it
  }
}
