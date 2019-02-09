// @flow

import type { TId } from '../types';

export default function (): TId {
  return `_${Math.random().toString(36).substr(2, 9)}`;
}
