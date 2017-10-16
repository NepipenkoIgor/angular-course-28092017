import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductsService } from '../common/services/products.service';
import { ModalService } from '../common/services/modal.service';
import { FullCardComponent } from './card/full-card/full-card.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public text: string;
  public products$: Observable<Product[]>;

  public constructor(
    private _productsService: ProductsService,
    private _modalService: ModalService
  ) { }

  public ngOnInit(): void {
    this.products$ = this._productsService.getProducts();
  }

  public ngOnDestroy(): void {
    this._modalService.close();
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
