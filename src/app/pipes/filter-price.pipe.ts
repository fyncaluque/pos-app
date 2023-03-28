import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrice',
})
export class FilterPricePipe implements PipeTransform {
  transform(items: any[], minPrice: number, maxPrice: number): any[] {
    if (!items) {
      return [];
    }

    if (minPrice && maxPrice) {
      return items.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
    }

    if (minPrice && !maxPrice) {
      return items.filter((item) => item.price >= minPrice);
    }

    if (!minPrice && maxPrice) {
      return items.filter((item) => item.price <= maxPrice);
    }

    return items;
  }
}
