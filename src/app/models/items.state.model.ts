import { ItemCartModel } from './item-cart.model';
import { ItemModel } from './item.model';

export interface ItemsStateModel {
  loading: boolean;
  items: ItemModel[];
  itemsCart: ItemCartModel[];
}
