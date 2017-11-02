"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
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
        expect(productsWidget.cards.count())
            .toEqual(0);
        //
        // searchWidget.searchInput.clear();
        protractor_1.browser.sleep(4000);
        protractor_1.browser.takeScreenshot()
            .then(function (png) {
            var stream = fs.createWriteStream('./img.png');
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
        // searchWidget.search('DRAGBOT');
        // expect(productsWidget.cards.count())
        //   .toEqual(1);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF5QjtBQUN6Qix5Q0FBcUM7QUFFckMsc0RBQXdEO0FBQ3hELHVEQUF5RDtBQUV6RCxRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFFN0IsSUFBTSxjQUFjLEdBQW1CLElBQUksNEJBQWMsRUFBRSxDQUFDO0lBQzVELElBQU0sWUFBWSxHQUFpQixJQUFJLHdCQUFZLEVBQUUsQ0FBQztJQUV0RCxVQUFVLENBQUM7UUFDVCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1QkFBdUIsRUFBRTtRQUMxQixZQUFZLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDM0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDakMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsRUFBRTtRQUNGLG9DQUFvQztRQUVwQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixvQkFBTyxDQUFDLGNBQWMsRUFBRTthQUNyQixJQUFJLENBQUMsVUFBQyxHQUFXO1lBQ2hCLElBQU0sTUFBTSxHQUFtQixFQUFFLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztRQUVMLGtDQUFrQztRQUNsQyx1Q0FBdUM7UUFDdkMsaUJBQWlCO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBicm93c2VyIH0gZnJvbSAncHJvdHJhY3Rvcic7XG5cbmltcG9ydCB7IFByb2R1Y3RzV2lkZ2V0IH0gZnJvbSAnLi9wcm9kdWN0cy9wcm9kdWN0cy53Zyc7XG5pbXBvcnQgeyBTZWFyY2hXaWRnZXQgfSBmcm9tICcuL2NvbW1vbi9zZWFyY2gvc2VhcmNoLndnJztcblxuZGVzY3JpYmUoJ2FuZ3VsYXItY291cnNlIEFwcCcsICgpID0+IHtcblxuICBjb25zdCBwcm9kdWN0c1dpZGdldDogUHJvZHVjdHNXaWRnZXQgPSBuZXcgUHJvZHVjdHNXaWRnZXQoKTtcbiAgY29uc3Qgc2VhcmNoV2lkZ2V0OiBTZWFyY2hXaWRnZXQgPSBuZXcgU2VhcmNoV2lkZ2V0KCk7XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgYnJvd3Nlci5nZXQoJy8nKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBzZWFyY2ggYnkgdGVybScsICgpID0+IHtcbiAgICBzZWFyY2hXaWRnZXQuc2VhcmNoKCdEUkFHQk9UYXNkYXNkYXNkYXNkJyk7XG4gICAgZXhwZWN0KHByb2R1Y3RzV2lkZ2V0LmNhcmRzLmNvdW50KCkpXG4gICAgICAudG9FcXVhbCgwKTtcbiAgICAvL1xuICAgIC8vIHNlYXJjaFdpZGdldC5zZWFyY2hJbnB1dC5jbGVhcigpO1xuXG4gICAgYnJvd3Nlci5zbGVlcCg0MDAwKTtcbiAgICBicm93c2VyLnRha2VTY3JlZW5zaG90KClcbiAgICAgIC50aGVuKChwbmc6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBzdHJlYW06IGZzLldyaXRlU3RyZWFtID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0oJy4vaW1nLnBuZycpO1xuICAgICAgICBzdHJlYW0ud3JpdGUobmV3IEJ1ZmZlcihwbmcsICdiYXNlNjQnKSk7XG4gICAgICAgIHN0cmVhbS5lbmQoKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gc2VhcmNoV2lkZ2V0LnNlYXJjaCgnRFJBR0JPVCcpO1xuICAgIC8vIGV4cGVjdChwcm9kdWN0c1dpZGdldC5jYXJkcy5jb3VudCgpKVxuICAgIC8vICAgLnRvRXF1YWwoMSk7XG4gIH0pO1xufSk7XG4iXX0=