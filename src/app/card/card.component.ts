import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {

  @Input()
  public product: Product;
  @Input()
  public position: number;
  @Input()
  public isOdd: boolean;

}
