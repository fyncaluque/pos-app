import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemCartModel } from 'src/app/models/item-cart.model';
import { ItemModel } from 'src/app/models/item.model';
import { addToCart } from 'src/app/store/actions/items.actions';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  @Input() item!: ItemModel;

  constructor(private store: Store) {}

  addToCart(itemSelected: ItemModel) {
    const itemCart: ItemCartModel = { ...itemSelected, amount: 1 };
    this.store.dispatch(addToCart({ item: itemCart }));
  }
}
