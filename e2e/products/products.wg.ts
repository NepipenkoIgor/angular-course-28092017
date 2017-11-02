import { by, element, ElementArrayFinder } from 'protractor';

export class ProductsWidget {
  public cards: ElementArrayFinder;

  public constructor() {
    this.cards = element.all(by.css('app-card'));
  }

  public openFullCard(index: number): void {
    this.cards.get(index).click();
  }
}