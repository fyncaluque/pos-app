import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadItems } from 'src/app/store/actions/items.actions';

@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.css'],
})
export class SalePageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadItems());
  }
}
