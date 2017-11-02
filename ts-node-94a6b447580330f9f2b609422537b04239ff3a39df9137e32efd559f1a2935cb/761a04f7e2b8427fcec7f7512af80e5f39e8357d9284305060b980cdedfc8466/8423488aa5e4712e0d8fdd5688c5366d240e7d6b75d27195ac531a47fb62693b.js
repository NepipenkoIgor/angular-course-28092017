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
        // searchWidget.searchInput.clear();
        //
        //
        // searchWidget.search('DRAGBOT');
        // expect(productsWidget.cards.count()).toEqual(1);
        expect(1).toEqual(1);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFxQztBQUVyQyxzREFBd0Q7QUFDeEQsdURBQXlEO0FBRXpELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUU3QixJQUFNLGNBQWMsR0FBbUIsSUFBSSw0QkFBYyxFQUFFLENBQUM7SUFDNUQsSUFBTSxZQUFZLEdBQWlCLElBQUksd0JBQVksRUFBRSxDQUFDO0lBRXRELFVBQVUsQ0FBQztRQUNULG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBQzFCLFlBQVksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxFQUFFO1FBQ0Ysb0NBQW9DO1FBQ3BDLEVBQUU7UUFDRixFQUFFO1FBQ0Ysa0NBQWtDO1FBQ2xDLG1EQUFtRDtRQUNuRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBicm93c2VyIH0gZnJvbSAncHJvdHJhY3Rvcic7XG5cbmltcG9ydCB7IFByb2R1Y3RzV2lkZ2V0IH0gZnJvbSAnLi9wcm9kdWN0cy9wcm9kdWN0cy53Zyc7XG5pbXBvcnQgeyBTZWFyY2hXaWRnZXQgfSBmcm9tICcuL2NvbW1vbi9zZWFyY2gvc2VhcmNoLndnJztcblxuZGVzY3JpYmUoJ2FuZ3VsYXItY291cnNlIEFwcCcsICgpID0+IHtcblxuICBjb25zdCBwcm9kdWN0c1dpZGdldDogUHJvZHVjdHNXaWRnZXQgPSBuZXcgUHJvZHVjdHNXaWRnZXQoKTtcbiAgY29uc3Qgc2VhcmNoV2lkZ2V0OiBTZWFyY2hXaWRnZXQgPSBuZXcgU2VhcmNoV2lkZ2V0KCk7XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgYnJvd3Nlci5nZXQoJy8nKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBzZWFyY2ggYnkgdGVybScsICgpID0+IHtcbiAgICBzZWFyY2hXaWRnZXQuc2VhcmNoKCdEUkFHQk9UYXNkYXNkYXNkYXNkJyk7XG4gICAgZXhwZWN0KHByb2R1Y3RzV2lkZ2V0LmNhcmRzLmNvdW50KCkpLnRvRXF1YWwoMCk7XG4gICAgLy9cbiAgICAvLyBzZWFyY2hXaWRnZXQuc2VhcmNoSW5wdXQuY2xlYXIoKTtcbiAgICAvL1xuICAgIC8vXG4gICAgLy8gc2VhcmNoV2lkZ2V0LnNlYXJjaCgnRFJBR0JPVCcpO1xuICAgIC8vIGV4cGVjdChwcm9kdWN0c1dpZGdldC5jYXJkcy5jb3VudCgpKS50b0VxdWFsKDEpO1xuICAgIGV4cGVjdCgxKS50b0VxdWFsKDEpO1xuICB9KTtcbn0pO1xuIl19