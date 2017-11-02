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
        // searchWidget.search('DRAGBOTasdasdasdasd');
        // expect(productsWidget.cards.count())
        //   .toEqual(0);
        //
        // searchWidget.searchInput.clear();
        searchWidget.search('DRAGBOT');
        expect(productsWidget.cards.count())
            .toEqual(1);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFxQztBQUVyQyxzREFBd0Q7QUFDeEQsdURBQXlEO0FBRXpELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUU3QixJQUFNLGNBQWMsR0FBbUIsSUFBSSw0QkFBYyxFQUFFLENBQUM7SUFDNUQsSUFBTSxZQUFZLEdBQWlCLElBQUksd0JBQVksRUFBRSxDQUFDO0lBRXRELFVBQVUsQ0FBQztRQUNULG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBQzFCLDhDQUE4QztRQUM5Qyx1Q0FBdUM7UUFDdkMsaUJBQWlCO1FBQ2pCLEVBQUU7UUFDRixvQ0FBb0M7UUFFcEMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJyb3dzZXIgfSBmcm9tICdwcm90cmFjdG9yJztcblxuaW1wb3J0IHsgUHJvZHVjdHNXaWRnZXQgfSBmcm9tICcuL3Byb2R1Y3RzL3Byb2R1Y3RzLndnJztcbmltcG9ydCB7IFNlYXJjaFdpZGdldCB9IGZyb20gJy4vY29tbW9uL3NlYXJjaC9zZWFyY2gud2cnO1xuXG5kZXNjcmliZSgnYW5ndWxhci1jb3Vyc2UgQXBwJywgKCkgPT4ge1xuXG4gIGNvbnN0IHByb2R1Y3RzV2lkZ2V0OiBQcm9kdWN0c1dpZGdldCA9IG5ldyBQcm9kdWN0c1dpZGdldCgpO1xuICBjb25zdCBzZWFyY2hXaWRnZXQ6IFNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2hXaWRnZXQoKTtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBicm93c2VyLmdldCgnLycpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHNlYXJjaCBieSB0ZXJtJywgKCkgPT4ge1xuICAgIC8vIHNlYXJjaFdpZGdldC5zZWFyY2goJ0RSQUdCT1Rhc2Rhc2Rhc2Rhc2QnKTtcbiAgICAvLyBleHBlY3QocHJvZHVjdHNXaWRnZXQuY2FyZHMuY291bnQoKSlcbiAgICAvLyAgIC50b0VxdWFsKDApO1xuICAgIC8vXG4gICAgLy8gc2VhcmNoV2lkZ2V0LnNlYXJjaElucHV0LmNsZWFyKCk7XG5cbiAgICBzZWFyY2hXaWRnZXQuc2VhcmNoKCdEUkFHQk9UJyk7XG4gICAgZXhwZWN0KHByb2R1Y3RzV2lkZ2V0LmNhcmRzLmNvdW50KCkpXG4gICAgICAudG9FcXVhbCgxKTtcbiAgfSk7XG59KTtcbiJdfQ==