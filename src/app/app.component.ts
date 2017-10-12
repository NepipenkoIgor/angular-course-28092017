import { Component, OnInit } from '@angular/core';

// import { products$ } from './data';
import { Observable } from 'rxjs/Observable';
import { ProductsService } from './common/services/products.service';
import { ModalService } from './common/services/modal.service';
import { FullCardComponent } from './card/full-card/full-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title: string = 'Angular course';
  public text: string;
  // TODO safe mode
  // tslint:disable-next-line
  public logo: string = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==';
  public width: number = 50;
  public desc: string = 'its logo';
  public placeholder: string = 'search term';

  public products$: Observable<Product[]>;

  public constructor(
    private _productsService: ProductsService,
    private _modalService: ModalService,
  ) {

  }

  public ngOnInit(): void {
    this.products$ = this._productsService.getProducts();

    // this.subscription = products$.subscribe((products: Product[]) => {
    //   this.products$ = products;
    // });
  }


  public clickOnImage(): void {

  }

  public openFullCard(product: Product): void {
    this._modalService.open({
      component: FullCardComponent,
      context: {
        product
      }
    });
  }
}