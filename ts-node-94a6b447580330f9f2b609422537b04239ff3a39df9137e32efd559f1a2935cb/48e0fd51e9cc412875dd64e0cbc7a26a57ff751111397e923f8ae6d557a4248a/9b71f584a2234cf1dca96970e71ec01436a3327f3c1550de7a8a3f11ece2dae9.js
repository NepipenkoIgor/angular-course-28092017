"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var protractor_1 = require("protractor");
var products_wg_1 = require("./products/products.wg");
var search_wg_1 = require("./common/search/search.wg");
var productModel_wg_1 = require("./products/productModel.wg");
var cart_wg_1 = require("./common/cart/cart.wg");
var cartModal_wg_1 = require("./common/cart/cartModal.wg");
function screen(name) {
    protractor_1.browser.takeScreenshot()
        .then(function (png) {
        var stream = fs.createWriteStream("./" + name + ".png");
        stream.write(new Buffer(png, 'base64'));
        stream.end();
    });
}
describe('angular-course App', function () {
    var productsWidget = new products_wg_1.ProductsWidget();
    var searchWidget = new search_wg_1.SearchWidget();
    var productsModalWidget = new productModel_wg_1.ProductsModalWidget();
    var cartWidget = new cart_wg_1.CartWidget();
    var cartModalWidget = new cartModal_wg_1.CartModalWidget();
    beforeEach(function () {
        protractor_1.browser.get('/');
    });
    it('should search by term', function () {
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
    it('should display card modal', function () {
        productsWidget.openFullCard(3);
        expect(productsModalWidget.title.getText())
            .toEqual('BARKARAMA');
        expect(productsModalWidget.price.getText())
            .toEqual('1951.37');
        screen('img1');
    });
    it('should add to product cart and remove', function () {
        [1, 3, 7].forEach(function (index) {
            productsWidget.openFullCard(index);
            productsModalWidget.buy();
        });
        expect(cartWidget.counter.getText())
            .toEqual('3');
        screen('img2');
        cartWidget.openCart();
        [0, 1, 2].forEach(function (index) {
            cartModalWidget.removeFromCart(0);
        });
        expect(cartWidget.counter)
            .toBeDefined(false);
        screen('img3');
    });
    it('should not open empty cart ', function () {
        cartWidget.openCart();
        expect(cartModalWidget.cartModal)
            .toBeDefined(false);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF5QjtBQUN6Qix5Q0FBcUM7QUFFckMsc0RBQXdEO0FBQ3hELHVEQUF5RDtBQUN6RCw4REFBaUU7QUFDakUsaURBQW1EO0FBQ25ELDJEQUE2RDtBQUU3RCxnQkFBZ0IsSUFBWTtJQUMxQixvQkFBTyxDQUFDLGNBQWMsRUFBRTtTQUNyQixJQUFJLENBQUMsVUFBQyxHQUFXO1FBQ2hCLElBQU0sTUFBTSxHQUFtQixFQUFFLENBQUMsaUJBQWlCLENBQUMsT0FBSyxJQUFJLFNBQU0sQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBRTdCLElBQU0sY0FBYyxHQUFtQixJQUFJLDRCQUFjLEVBQUUsQ0FBQztJQUM1RCxJQUFNLFlBQVksR0FBaUIsSUFBSSx3QkFBWSxFQUFFLENBQUM7SUFDdEQsSUFBTSxtQkFBbUIsR0FBd0IsSUFBSSxxQ0FBbUIsRUFBRSxDQUFDO0lBQzNFLElBQU0sVUFBVSxHQUFlLElBQUksb0JBQVUsRUFBRSxDQUFDO0lBQ2hELElBQU0sZUFBZSxHQUFvQixJQUFJLDhCQUFlLEVBQUUsQ0FBQztJQUUvRCxVQUFVLENBQUM7UUFDVCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1QkFBdUIsRUFBRTtRQUMxQixZQUFZLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDakMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsRUFBRTtRQUNGLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFHakMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFZCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkJBQTJCLEVBQUU7UUFDOUIsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3hDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3hDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsdUNBQXVDLEVBQUU7UUFDMUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQWE7WUFDOUIsY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFZixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQWE7WUFDOUIsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2FBQ3ZCLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsNkJBQTZCLEVBQUU7UUFDaEMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO2FBQzlCLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gJ3Byb3RyYWN0b3InO1xuXG5pbXBvcnQgeyBQcm9kdWN0c1dpZGdldCB9IGZyb20gJy4vcHJvZHVjdHMvcHJvZHVjdHMud2cnO1xuaW1wb3J0IHsgU2VhcmNoV2lkZ2V0IH0gZnJvbSAnLi9jb21tb24vc2VhcmNoL3NlYXJjaC53Zyc7XG5pbXBvcnQgeyBQcm9kdWN0c01vZGFsV2lkZ2V0IH0gZnJvbSAnLi9wcm9kdWN0cy9wcm9kdWN0TW9kZWwud2cnO1xuaW1wb3J0IHsgQ2FydFdpZGdldCB9IGZyb20gJy4vY29tbW9uL2NhcnQvY2FydC53Zyc7XG5pbXBvcnQgeyBDYXJ0TW9kYWxXaWRnZXQgfSBmcm9tICcuL2NvbW1vbi9jYXJ0L2NhcnRNb2RhbC53Zyc7XG5cbmZ1bmN0aW9uIHNjcmVlbihuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgYnJvd3Nlci50YWtlU2NyZWVuc2hvdCgpXG4gICAgLnRoZW4oKHBuZzogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBzdHJlYW06IGZzLldyaXRlU3RyZWFtID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0oYC4vJHtuYW1lfS5wbmdgKTtcbiAgICAgIHN0cmVhbS53cml0ZShuZXcgQnVmZmVyKHBuZywgJ2Jhc2U2NCcpKTtcbiAgICAgIHN0cmVhbS5lbmQoKTtcbiAgICB9KTtcbn1cblxuZGVzY3JpYmUoJ2FuZ3VsYXItY291cnNlIEFwcCcsICgpID0+IHtcblxuICBjb25zdCBwcm9kdWN0c1dpZGdldDogUHJvZHVjdHNXaWRnZXQgPSBuZXcgUHJvZHVjdHNXaWRnZXQoKTtcbiAgY29uc3Qgc2VhcmNoV2lkZ2V0OiBTZWFyY2hXaWRnZXQgPSBuZXcgU2VhcmNoV2lkZ2V0KCk7XG4gIGNvbnN0IHByb2R1Y3RzTW9kYWxXaWRnZXQ6IFByb2R1Y3RzTW9kYWxXaWRnZXQgPSBuZXcgUHJvZHVjdHNNb2RhbFdpZGdldCgpO1xuICBjb25zdCBjYXJ0V2lkZ2V0OiBDYXJ0V2lkZ2V0ID0gbmV3IENhcnRXaWRnZXQoKTtcbiAgY29uc3QgY2FydE1vZGFsV2lkZ2V0OiBDYXJ0TW9kYWxXaWRnZXQgPSBuZXcgQ2FydE1vZGFsV2lkZ2V0KCk7XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgYnJvd3Nlci5nZXQoJy8nKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBzZWFyY2ggYnkgdGVybScsICgpID0+IHtcbiAgICBzZWFyY2hXaWRnZXQuc2VhcmNoKCdEUkFHQk9UYXNkYXNkYXNkYXNkJyk7XG4gICAgZXhwZWN0KHByb2R1Y3RzV2lkZ2V0LmNhcmRzLmNvdW50KCkpXG4gICAgICAudG9FcXVhbCgwKTtcbiAgICAvL1xuICAgIHNlYXJjaFdpZGdldC5zZWFyY2hJbnB1dC5jbGVhcigpO1xuXG5cbiAgICBzZWFyY2hXaWRnZXQuc2VhcmNoKCdEUkFHQk9UJyk7XG4gICAgZXhwZWN0KHByb2R1Y3RzV2lkZ2V0LmNhcmRzLmNvdW50KCkpXG4gICAgICAudG9FcXVhbCgxKTtcblxuICAgIHNjcmVlbignaW1nJyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZGlzcGxheSBjYXJkIG1vZGFsJywgKCkgPT4ge1xuICAgIHByb2R1Y3RzV2lkZ2V0Lm9wZW5GdWxsQ2FyZCgzKTtcbiAgICBleHBlY3QocHJvZHVjdHNNb2RhbFdpZGdldC50aXRsZS5nZXRUZXh0KCkpXG4gICAgICAudG9FcXVhbCgnQkFSS0FSQU1BJyk7XG4gICAgZXhwZWN0KHByb2R1Y3RzTW9kYWxXaWRnZXQucHJpY2UuZ2V0VGV4dCgpKVxuICAgICAgLnRvRXF1YWwoJzE5NTEuMzcnKTtcbiAgICBzY3JlZW4oJ2ltZzEnKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBhZGQgdG8gcHJvZHVjdCBjYXJ0IGFuZCByZW1vdmUnLCAoKSA9PiB7XG4gICAgWzEsIDMsIDddLmZvckVhY2goKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHByb2R1Y3RzV2lkZ2V0Lm9wZW5GdWxsQ2FyZChpbmRleCk7XG4gICAgICBwcm9kdWN0c01vZGFsV2lkZ2V0LmJ1eSgpO1xuICAgIH0pO1xuICAgIGV4cGVjdChjYXJ0V2lkZ2V0LmNvdW50ZXIuZ2V0VGV4dCgpKVxuICAgICAgLnRvRXF1YWwoJzMnKTtcbiAgICBzY3JlZW4oJ2ltZzInKTtcblxuICAgIGNhcnRXaWRnZXQub3BlbkNhcnQoKTtcbiAgICBbMCwgMSwgMl0uZm9yRWFjaCgoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgY2FydE1vZGFsV2lkZ2V0LnJlbW92ZUZyb21DYXJ0KDApO1xuICAgIH0pO1xuXG4gICAgZXhwZWN0KGNhcnRXaWRnZXQuY291bnRlcilcbiAgICAgIC50b0JlRGVmaW5lZChmYWxzZSk7XG5cbiAgICBzY3JlZW4oJ2ltZzMnKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgbm90IG9wZW4gZW1wdHkgY2FydCAnLCAoKSA9PiB7XG4gICAgY2FydFdpZGdldC5vcGVuQ2FydCgpO1xuICAgIGV4cGVjdChjYXJ0TW9kYWxXaWRnZXQuY2FydE1vZGFsKVxuICAgICAgLnRvQmVEZWZpbmVkKGZhbHNlKTtcbiAgfSk7XG59KTtcbiJdfQ==