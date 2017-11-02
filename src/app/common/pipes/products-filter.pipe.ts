import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  public transform(products: Product[], searchTerm: string): Product[] {
    if (!searchTerm) {
      return products;
    }
    return products.filter((product: Product) =>
      `${product.title}${product.price}`.toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase()));
  }

}
