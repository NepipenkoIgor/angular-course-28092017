import { Component, OnInit } from '@angular/core';
import { CartService } from '../common/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: Product[] = [];

  public constructor(
    private _cartService: CartService
  ) { }

  public ngOnInit(): void {
    this._cartService.cartSequence.subscribe((products: Product[]) => {
      this.products = products;
    });
  }

}
