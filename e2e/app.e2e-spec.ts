import * as fs from 'fs';
import { browser } from 'protractor';

import { ProductsWidget } from './products/products.wg';
import { SearchWidget } from './common/search/search.wg';
import { ProductsModalWidget } from './products/productModel.wg';
import { CartWidget } from './common/cart/cart.wg';
import { CartModalWidget } from './common/cart/cartModal.wg';

function screen(name: string): void {
  browser.takeScreenshot()
    .then((png: string) => {
      const stream: fs.WriteStream = fs.createWriteStream(`./${name}.png`);
      stream.write(new Buffer(png, 'base64'));
      stream.end();
    });
}

describe('angular-course App', () => {

  const productsWidget: ProductsWidget = new ProductsWidget();
  const searchWidget: SearchWidget = new SearchWidget();
  const productsModalWidget: ProductsModalWidget = new ProductsModalWidget();
  const cartWidget: CartWidget = new CartWidget();
  const cartModalWidget: CartModalWidget = new CartModalWidget();

  beforeEach(() => {
    browser.get('/');
  });

  it('should search by term', () => {
    searchWidget.search('DRAGBOTasdasdasdasd');
    expect(productsWidget.cards.count())
      .toEqual(0);
    //
    searchWidget.searchInput.clear();


    searchWidget.search('DRAGBOT');
    expect(productsWidget.cards.count())
      .toEqual(1);

    screen('img');
  });

  it('should display card modal', () => {
    productsWidget.openFullCard(3);
    expect(productsModalWidget.title.getText())
      .toEqual('BARKARAMA');
    expect(productsModalWidget.price.getText())
      .toEqual('1951.37');
    screen('img1');
  });

  it('should add to product cart and remove', () => {
    [1, 3, 7].forEach((index: number) => {
      productsWidget.openFullCard(index);
      productsModalWidget.buy();
    });
    expect(cartWidget.counter.getText())
      .toEqual('3');
    screen('img2');

    cartWidget.openCart();
    [0, 1, 2].forEach((index: number) => {
      screen(`img${index}remove`);
      cartModalWidget.removeFromCart(0);
    });

    expect(cartWidget.counter)
      .toBeDefined(false);

    screen('img3');
  });
  it('should not open empty cart ', () => {
    cartWidget.openCart();
    expect(cartModalWidget.cartModal)
      .toBeDefined(false);
  });
});
