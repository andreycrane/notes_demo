// @flow

export type TId = string;

export type TNote = $ReadOnly<{|
  id: TId,
  title: ?string,
  text: string,
  color: ?string,
  category: ?TId
|}>;

export type TNotes = $ReadOnlyArray<TNote>;

export type TCategory = $ReadOnly<{|
  id: TId,
  name: string
|}>;

export type TCategories = $ReadOnlyArray<TCategory>;

export type TState = $ReadOnly<{|
  notes: TNotes,
  categories: TCategories
|}>;

export type TAction = $ReadOnly<{|
  type: string,
  payload: mixed
|}>;
