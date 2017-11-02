"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var protractor_1 = require("protractor");
var products_wg_1 = require("./products/products.wg");
var search_wg_1 = require("./common/search/search.wg");
var productModel_wg_1 = require("./products/productModel.wg");
describe('angular-course App', function () {
    var productsWidget = new products_wg_1.ProductsWidget();
    var searchWidget = new search_wg_1.SearchWidget();
    var productsModalWidget = new productModel_wg_1.ProductsModalWidget();
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
        protractor_1.browser.takeScreenshot()
            .then(function (png) {
            var stream = fs.createWriteStream('./img.png');
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
    });
    it('should display card modal', function () {
        productsWidget.openFullCard(3);
        expect(productsModalWidget.title.getText())
            .toEqual('BARKARAMA');
        expect(productsModalWidget.price.getText())
            .toEqual('1951.37');
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF5QjtBQUN6Qix5Q0FBcUM7QUFFckMsc0RBQXdEO0FBQ3hELHVEQUF5RDtBQUN6RCw4REFBaUU7QUFFakUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBRTdCLElBQU0sY0FBYyxHQUFtQixJQUFJLDRCQUFjLEVBQUUsQ0FBQztJQUM1RCxJQUFNLFlBQVksR0FBaUIsSUFBSSx3QkFBWSxFQUFFLENBQUM7SUFDdEQsSUFBTSxtQkFBbUIsR0FBd0IsSUFBSSxxQ0FBbUIsRUFBRSxDQUFDO0lBRTNFLFVBQVUsQ0FBQztRQUNULG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBQzFCLFlBQVksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCxFQUFFO1FBQ0YsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUdqQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2pDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVkLG9CQUFPLENBQUMsY0FBYyxFQUFFO2FBQ3JCLElBQUksQ0FBQyxVQUFDLEdBQVc7WUFDaEIsSUFBTSxNQUFNLEdBQW1CLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNqRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkJBQTJCLEVBQUU7UUFDOUIsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3hDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3hDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gJ3Byb3RyYWN0b3InO1xuXG5pbXBvcnQgeyBQcm9kdWN0c1dpZGdldCB9IGZyb20gJy4vcHJvZHVjdHMvcHJvZHVjdHMud2cnO1xuaW1wb3J0IHsgU2VhcmNoV2lkZ2V0IH0gZnJvbSAnLi9jb21tb24vc2VhcmNoL3NlYXJjaC53Zyc7XG5pbXBvcnQgeyBQcm9kdWN0c01vZGFsV2lkZ2V0IH0gZnJvbSAnLi9wcm9kdWN0cy9wcm9kdWN0TW9kZWwud2cnO1xuXG5kZXNjcmliZSgnYW5ndWxhci1jb3Vyc2UgQXBwJywgKCkgPT4ge1xuXG4gIGNvbnN0IHByb2R1Y3RzV2lkZ2V0OiBQcm9kdWN0c1dpZGdldCA9IG5ldyBQcm9kdWN0c1dpZGdldCgpO1xuICBjb25zdCBzZWFyY2hXaWRnZXQ6IFNlYXJjaFdpZGdldCA9IG5ldyBTZWFyY2hXaWRnZXQoKTtcbiAgY29uc3QgcHJvZHVjdHNNb2RhbFdpZGdldDogUHJvZHVjdHNNb2RhbFdpZGdldCA9IG5ldyBQcm9kdWN0c01vZGFsV2lkZ2V0KCk7XG5cbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgYnJvd3Nlci5nZXQoJy8nKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBzZWFyY2ggYnkgdGVybScsICgpID0+IHtcbiAgICBzZWFyY2hXaWRnZXQuc2VhcmNoKCdEUkFHQk9UYXNkYXNkYXNkYXNkJyk7XG4gICAgZXhwZWN0KHByb2R1Y3RzV2lkZ2V0LmNhcmRzLmNvdW50KCkpXG4gICAgICAudG9FcXVhbCgwKTtcbiAgICAvL1xuICAgIHNlYXJjaFdpZGdldC5zZWFyY2hJbnB1dC5jbGVhcigpO1xuXG5cbiAgICBzZWFyY2hXaWRnZXQuc2VhcmNoKCdEUkFHQk9UJyk7XG4gICAgZXhwZWN0KHByb2R1Y3RzV2lkZ2V0LmNhcmRzLmNvdW50KCkpXG4gICAgICAudG9FcXVhbCgxKTtcblxuICAgIGJyb3dzZXIudGFrZVNjcmVlbnNob3QoKVxuICAgICAgLnRoZW4oKHBuZzogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmVhbTogZnMuV3JpdGVTdHJlYW0gPSBmcy5jcmVhdGVXcml0ZVN0cmVhbSgnLi9pbWcucG5nJyk7XG4gICAgICAgIHN0cmVhbS53cml0ZShuZXcgQnVmZmVyKHBuZywgJ2Jhc2U2NCcpKTtcbiAgICAgICAgc3RyZWFtLmVuZCgpO1xuICAgICAgfSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZGlzcGxheSBjYXJkIG1vZGFsJywgKCkgPT4ge1xuICAgIHByb2R1Y3RzV2lkZ2V0Lm9wZW5GdWxsQ2FyZCgzKTtcbiAgICBleHBlY3QocHJvZHVjdHNNb2RhbFdpZGdldC50aXRsZS5nZXRUZXh0KCkpXG4gICAgICAudG9FcXVhbCgnQkFSS0FSQU1BJyk7XG4gICAgZXhwZWN0KHByb2R1Y3RzTW9kYWxXaWRnZXQucHJpY2UuZ2V0VGV4dCgpKVxuICAgICAgLnRvRXF1YWwoJzE5NTEuMzcnKTtcbiAgfSk7XG59KTtcbiJdfQ==