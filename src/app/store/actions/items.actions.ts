import { createAction, props } from '@ngrx/store';
import { ItemModel } from 'src/app/models/item.model';

export const loadItems = createAction('[Sale Page] Start load items');

export const loadedItems = createAction(
  '[List Items] Loaded items',
  props<{ items: ItemModel[] }>()
);
