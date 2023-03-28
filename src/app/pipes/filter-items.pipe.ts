import { Pipe, PipeTransform } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ItemCartModel } from '../models/item-cart.model';

@Pipe({
  name: 'filterItems',
})
export class FilterItemsPipe implements PipeTransform {
  transform(items: any[], filter: string): any[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter(
      (item) => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
  }
}
