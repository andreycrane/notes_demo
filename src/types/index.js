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

export type TEditMode = null | 'NEW' | 'EXISTING';
export type TEditType = null | 'NOTE' | 'CATEGORY';

export type TEdit = $ReadOnly<{|
  mode: TEditMode,
  type: TEditType,
  id: TId | null
|}>;

export type TState = $ReadOnly<{|
  notes: TNotes,
  categories: TCategories,
  edit: TEdit
|}>;
