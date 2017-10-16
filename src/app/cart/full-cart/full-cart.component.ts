import { Component } from '@angular/core';
import { CartService } from '../../common/services/cart.service';

@Component({
  selector: 'app-full-cart',
  templateUrl: './full-cart.component.html',
  styleUrls: ['./full-cart.component.scss']
})
export class FullCartComponent {

  public constructor(
    private _cartService: CartService
  ) {

  }

  public remove(cartItem: CartItem): void {
    this._cartService.updateCart = cartItem;
  }

  public getTotalSum(products: Product[]): string {
    return products.reduce((totalPrice: number, product: Product) => {
      return totalPrice += Number(product.price);
    }, 0)
      .toFixed(2);
  }
}
