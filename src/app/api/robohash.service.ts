import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { ItemModel } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class RobohashService {
  constructor() {}

  getData() {
    const data: ItemModel[] = [
      {
        id: '1',
        name: 'robohash 1',
        price: 200,
        imageUrl: 'https://robohash.org/1',
      },
      {
        id: '2',
        name: 'robohash 2',
        price: 100,
        imageUrl: 'https://robohash.org/2',
      },
    ];

    return of(data).pipe(delay(1500));
  }
}
