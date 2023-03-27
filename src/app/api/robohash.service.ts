import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ItemModel } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class RobohashService {
  constructor() {}

  getData(): Observable<ItemModel[]> {
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
      {
        id: '3',
        name: 'robohash 3',
        price: 100,
        imageUrl: 'https://robohash.org/3',
      },
      {
        id: '4',
        name: 'robohash 4',
        price: 100,
        imageUrl: 'https://robohash.org/4',
      },
      {
        id: '5',
        name: 'robohash 5',
        price: 100,
        imageUrl: 'https://robohash.org/5',
      },
      {
        id: '6',
        name: 'robohash 6',
        price: 100,
        imageUrl: 'https://robohash.org/6',
      },
    ];

    return of(data).pipe(delay(1500));
  }
}
