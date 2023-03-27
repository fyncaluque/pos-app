import { ActionReducerMap } from '@ngrx/store';
import { ItemsStateModel } from '../models/items.state.model';
import { itemsReducer } from './reducers/items.reducers';

export interface AppState {
  itemsState: ItemsStateModel;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  itemsState: itemsReducer,
};
