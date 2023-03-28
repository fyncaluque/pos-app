import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemModel } from 'src/app/models/item.model';
import { selectItems } from 'src/app/store/selectors/items.selectors';
import { FilterItemsPipe } from '../../pipes/filter-items.pipe';
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styles: [],
})
export class ListItemsComponent implements OnInit {
  items$: Observable<any[]> = new Observable();
  filterValue!: string;
  minPrice!: number;
  maxPrice!: number;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.items$ = this.store.select(selectItems);
  }
}
