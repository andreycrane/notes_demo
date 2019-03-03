// @flow
import type { TNote } from '../../types';

export function categoryFilter(sp: URLSearchParams, n: TNote): boolean {
  if (!sp.has('category')) {
    return true;
  }

  return (n.category === sp.get('category'));
}

export function searchFilter(sp: URLSearchParams, n: TNote): boolean {
  if (!sp.has('search')) {
    return true;
  }

  const search = sp.get('search');
  if (typeof search !== 'string') {
    return false;
  }

  const { text, title } = n;

  return ((typeof text === 'string' && text.indexOf(search) > -1)
    || (typeof title === 'string' && title.indexOf(search) > -1));
}
