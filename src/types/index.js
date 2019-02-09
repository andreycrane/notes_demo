// @flow

export type TId = string;

export type TNote = $ReadOnly<{|
  id: TId,
  title: string,
  text: string,
  color: string,
  category: TId | null
|}>;

export type TCategory = $ReadOnly<{|
  id: TId,
  name: string
|}>;

export type TState = $ReadOnly<{|
  notes: $ReadOnlyArray<TNote>,
  categories: $ReadOnlyArray<TCategory>
|}>;
