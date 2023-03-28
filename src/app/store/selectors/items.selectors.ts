import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemsStateModel } from 'src/app/models/items.state.model';

export const selectItemsFeacture =
  createFeatureSelector<ItemsStateModel>('itemsState');

export const selectItems = createSelector(
  selectItemsFeacture,
  (state: ItemsStateModel) => state.items
);

export const selectLoading = createSelector(
  selectItemsFeacture,
  (state: ItemsStateModel) => state.loading
);

export const selectItemsCart = createSelector(
  selectItemsFeacture,
  (state: ItemsStateModel) => state.itemsCart
);
