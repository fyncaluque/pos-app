import { ItemModel } from './item.model';

export interface ItemsStateModel {
  loading: boolean;
  items: ItemModel[];
}
