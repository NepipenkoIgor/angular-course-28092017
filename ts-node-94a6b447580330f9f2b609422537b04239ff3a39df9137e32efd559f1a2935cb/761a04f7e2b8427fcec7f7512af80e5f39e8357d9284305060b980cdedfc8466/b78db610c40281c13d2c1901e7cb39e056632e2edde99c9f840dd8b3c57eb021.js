"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var products_wg_1 = require("./products/products.wg");
var search_wg_1 = require("./common/search/search.wg");
describe('angular-course App', function () {
    var productsWidget = new products_wg_1.ProductsWidget();
    var searchWidget = new search_wg_1.SearchWidget();
    beforeEach(function () {
        protractor_1.browser.get('/');
    });
    it('should search by term', function () {
        searchWidget.search('DRAGBOTasdasdasdasd');
        expect(productsWidget.cards.count()).toEqual(0);
        //
        searchWidget.searchInput.clear();
        //
        //
        searchWidget.search('DRAGBOT');
        expect(productsWidget.cards.count()).toEqual(1);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFxQztBQUVyQyxzREFBd0Q7QUFDeEQsdURBQXlEO0FBRXpELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUU3QixJQUFNLGNBQWMsR0FBbUIsSUFBSSw0QkFBYyxFQUFFLENBQUM7SUFDNUQsSUFBTSxZQUFZLEdBQWlCLElBQUksd0JBQVksRUFBRSxDQUFDO0lBRXRELFVBQVUsQ0FBQztRQUNULG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBQzFCLFlBQVksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxFQUFFO1FBQ0YsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxFQUFFO1FBQ0YsRUFBRTtRQUNGLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJyb3dzZXIgfSBmcm9tICdwcm90cmFjdG9yJztcblxuaW1wb3J0IHsgUHJvZHVjdHNXaWRnZXQgfSBmcm9tICcuL3Byb2R1Y3RzL3Byb2R1Y3RzLndnJztcbmltcG9ydCB7IFNlYXJjaFdpZGdldCB9IGZyb20gJy4vY29tbW9uL3NlYXJjaC9zZWFyY2gud2cnO1xuXG5kZXNjcmliZSgnYW5ndWxhci1jb3Vyc2UgQXBwJywgKCkgPT4ge1xuXG4gIGNvbnN0IHByb2R1Y3RzV2lkZ2V0OiBQcm9kdWN0c1dpZGdldCA9IG5ldyBQcm9kdWN0c1dpZGdldCgpO1xuICBjb25zdCBzZWFyY2hXaWRnZXQ6IFNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2hXaWRnZXQoKTtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBicm93c2VyLmdldCgnLycpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHNlYXJjaCBieSB0ZXJtJywgKCkgPT4ge1xuICAgIHNlYXJjaFdpZGdldC5zZWFyY2goJ0RSQUdCT1Rhc2Rhc2Rhc2Rhc2QnKTtcbiAgICBleHBlY3QocHJvZHVjdHNXaWRnZXQuY2FyZHMuY291bnQoKSkudG9FcXVhbCgwKTtcbiAgICAvL1xuICAgIHNlYXJjaFdpZGdldC5zZWFyY2hJbnB1dC5jbGVhcigpO1xuICAgIC8vXG4gICAgLy9cbiAgICBzZWFyY2hXaWRnZXQuc2VhcmNoKCdEUkFHQk9UJyk7XG4gICAgZXhwZWN0KHByb2R1Y3RzV2lkZ2V0LmNhcmRzLmNvdW50KCkpLnRvRXF1YWwoMSk7XG4gIH0pO1xufSk7XG4iXX0=