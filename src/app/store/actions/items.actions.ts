import { createAction, props } from '@ngrx/store';
import { ItemCartModel } from 'src/app/models/item-cart.model';
import { ItemModel } from 'src/app/models/item.model';

export const loadItems = createAction('[Sale Page] Start load items');

export const loadedItems = createAction(
  '[List Items] Loaded items',
  props<{ items: ItemModel[] }>()
);

export const addToCart = createAction(
  '[Item Card] Add to cart',
  props<{ item: ItemCartModel }>()
);

export const removeItemCart = createAction(
  '[Cart item] Remove item cart',
  props<{ item: ItemCartModel }>()
);

export const increaseAmount = createAction(
  '[Cart item] Increase amount item',
  props<{ item: ItemCartModel }>()
);

export const decreaseAmount = createAction(
  '[Cart item] Decrease amount item',
  props<{ item: ItemCartModel }>()
);
