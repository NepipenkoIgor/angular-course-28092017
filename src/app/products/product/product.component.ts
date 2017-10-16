import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  public title: string;

  public constructor(
    private _activatedRoute: ActivatedRoute
  ) {

  }

  public ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: { title: string, product: Product }) => {
      this.title = data.title;
    });
  }


}
