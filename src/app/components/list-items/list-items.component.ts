import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/app/models/item.model';
import { selectItems } from 'src/app/store/selectors/items.selectors';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styles: [],
})
export class ListItemsComponent implements OnInit {
  items$: Observable<ItemModel[]> = new Observable();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.items$ = this.store.select(selectItems);
  }
}
