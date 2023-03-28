import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemCartModel } from 'src/app/models/item-cart.model';
import { selectItemsCart } from 'src/app/store/selectors/items.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  itemsCart$: Observable<ItemCartModel[]> = new Observable();
  emptyCart!: number;
  total: number = 0;

  constructor(private store: Store) {
    this.itemsCart$ = store.select(selectItemsCart);
    this.itemsCart$.subscribe((data) => {
      this.emptyCart = data.length;
      this.total = 0;
      data.map((item) => {
        this.total = this.total + item.amount * item.price;
      });
    });
  }
}
