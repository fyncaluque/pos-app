import { createReducer, on } from '@ngrx/store';
import { ItemsStateModel } from 'src/app/models/items.state.model';
import { loadedItems, loadItems } from '../actions/items.actions';

export const initialState: ItemsStateModel = { loading: false, items: [] };

export const ItemsReducer = createReducer(
  initialState,

  on(loadItems, (state) => ({
    ...state,
    loading: true,
  })),

  on(loadedItems, (state, action) => ({
    ...state,
    loading: false,
    items: action.payload,
  }))
);
