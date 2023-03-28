import { createReducer, on } from '@ngrx/store';
import { ItemsStateModel } from 'src/app/models/items.state.model';
import {
  addToCart,
  decreaseAmount,
  increaseAmount,
  loadedItems,
  loadItems,
  removeItemCart,
} from '../actions/items.actions';

export const initialState: ItemsStateModel = {
  loading: false,
  items: [],
  itemsCart: [],
};

export const ItemsReducer = createReducer(
  initialState,

  on(loadItems, (state) => ({
    ...state,
    loading: true,
  })),

  on(loadedItems, (state, action) => ({
    ...state,
    loading: false,
    items: action.items,
  })),

  on(addToCart, (state, action) => {
    const findItem = state.itemsCart.find((item) => item.id === action.item.id);
    if (findItem) {
      const newItemsCart = state.itemsCart.map((item) =>
        item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item
      );
      return { ...state, itemsCart: newItemsCart };
    } else {
      return { ...state, itemsCart: [...state.itemsCart, action.item] };
    }
  }),

  on(removeItemCart, (state, action) => ({
    ...state,
    itemsCart: state.itemsCart.filter((item) => item.id !== action.item.id),
  })),

  on(increaseAmount, (state, action) => ({
    ...state,
    itemsCart: state.itemsCart.map((item) =>
      item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item
    ),
  })),

  on(decreaseAmount, (state, action) => ({
    ...state,
    itemsCart: state.itemsCart.map((item) =>
      item.id === action.item.id ? { ...item, amount: item.amount - 1 } : item
    ),
  }))
);
