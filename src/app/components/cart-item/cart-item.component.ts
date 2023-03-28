import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemCartModel } from 'src/app/models/item-cart.model';
import {
  decreaseAmount,
  increaseAmount,
  removeItemCart,
} from 'src/app/store/actions/items.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() item!: ItemCartModel;

  constructor(private store: Store) {}

  removeItem(item: ItemCartModel) {
    this.store.dispatch(removeItemCart({ item }));
  }

  increaseAmount(item: ItemCartModel) {
    this.store.dispatch(increaseAmount({ item }));
  }
  decreaseAmount(item: ItemCartModel) {
    this.store.dispatch(decreaseAmount({ item }));
  }
}
