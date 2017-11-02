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
        protractor_1.browser.takeScreenshot()
            .then(function (png) {
            var stream = fs.createWriteStream('./img1.png');
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVCQUF5QjtBQUN6Qix5Q0FBcUM7QUFFckMsc0RBQXdEO0FBQ3hELHVEQUF5RDtBQUN6RCw4REFBaUU7QUFFakUsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBRTdCLElBQU0sY0FBYyxHQUFtQixJQUFJLDRCQUFjLEVBQUUsQ0FBQztJQUM1RCxJQUFNLFlBQVksR0FBaUIsSUFBSSx3QkFBWSxFQUFFLENBQUM7SUFDdEQsSUFBTSxtQkFBbUIsR0FBd0IsSUFBSSxxQ0FBbUIsRUFBRSxDQUFDO0lBRTNFLFVBQVUsQ0FBQztRQUNULG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBQzFCLFlBQVksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCxFQUFFO1FBQ0YsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUdqQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2pDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVkLG9CQUFPLENBQUMsY0FBYyxFQUFFO2FBQ3JCLElBQUksQ0FBQyxVQUFDLEdBQVc7WUFDaEIsSUFBTSxNQUFNLEdBQW1CLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNqRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkJBQTJCLEVBQUU7UUFDOUIsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3hDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3hDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0QixvQkFBTyxDQUFDLGNBQWMsRUFBRTthQUNyQixJQUFJLENBQUMsVUFBQyxHQUFXO1lBQ2hCLElBQU0sTUFBTSxHQUFtQixFQUFFLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBicm93c2VyIH0gZnJvbSAncHJvdHJhY3Rvcic7XG5cbmltcG9ydCB7IFByb2R1Y3RzV2lkZ2V0IH0gZnJvbSAnLi9wcm9kdWN0cy9wcm9kdWN0cy53Zyc7XG5pbXBvcnQgeyBTZWFyY2hXaWRnZXQgfSBmcm9tICcuL2NvbW1vbi9zZWFyY2gvc2VhcmNoLndnJztcbmltcG9ydCB7IFByb2R1Y3RzTW9kYWxXaWRnZXQgfSBmcm9tICcuL3Byb2R1Y3RzL3Byb2R1Y3RNb2RlbC53Zyc7XG5cbmRlc2NyaWJlKCdhbmd1bGFyLWNvdXJzZSBBcHAnLCAoKSA9PiB7XG5cbiAgY29uc3QgcHJvZHVjdHNXaWRnZXQ6IFByb2R1Y3RzV2lkZ2V0ID0gbmV3IFByb2R1Y3RzV2lkZ2V0KCk7XG4gIGNvbnN0IHNlYXJjaFdpZGdldDogU2VhcmNoV2lkZ2V0ID0gbmV3IFNlYXJjaFdpZGdldCgpO1xuICBjb25zdCBwcm9kdWN0c01vZGFsV2lkZ2V0OiBQcm9kdWN0c01vZGFsV2lkZ2V0ID0gbmV3IFByb2R1Y3RzTW9kYWxXaWRnZXQoKTtcblxuICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICBicm93c2VyLmdldCgnLycpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIHNlYXJjaCBieSB0ZXJtJywgKCkgPT4ge1xuICAgIHNlYXJjaFdpZGdldC5zZWFyY2goJ0RSQUdCT1Rhc2Rhc2Rhc2Rhc2QnKTtcbiAgICBleHBlY3QocHJvZHVjdHNXaWRnZXQuY2FyZHMuY291bnQoKSlcbiAgICAgIC50b0VxdWFsKDApO1xuICAgIC8vXG4gICAgc2VhcmNoV2lkZ2V0LnNlYXJjaElucHV0LmNsZWFyKCk7XG5cblxuICAgIHNlYXJjaFdpZGdldC5zZWFyY2goJ0RSQUdCT1QnKTtcbiAgICBleHBlY3QocHJvZHVjdHNXaWRnZXQuY2FyZHMuY291bnQoKSlcbiAgICAgIC50b0VxdWFsKDEpO1xuXG4gICAgYnJvd3Nlci50YWtlU2NyZWVuc2hvdCgpXG4gICAgICAudGhlbigocG5nOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyZWFtOiBmcy5Xcml0ZVN0cmVhbSA9IGZzLmNyZWF0ZVdyaXRlU3RyZWFtKCcuL2ltZy5wbmcnKTtcbiAgICAgICAgc3RyZWFtLndyaXRlKG5ldyBCdWZmZXIocG5nLCAnYmFzZTY0JykpO1xuICAgICAgICBzdHJlYW0uZW5kKCk7XG4gICAgICB9KTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBkaXNwbGF5IGNhcmQgbW9kYWwnLCAoKSA9PiB7XG4gICAgcHJvZHVjdHNXaWRnZXQub3BlbkZ1bGxDYXJkKDMpO1xuICAgIGV4cGVjdChwcm9kdWN0c01vZGFsV2lkZ2V0LnRpdGxlLmdldFRleHQoKSlcbiAgICAgIC50b0VxdWFsKCdCQVJLQVJBTUEnKTtcbiAgICBleHBlY3QocHJvZHVjdHNNb2RhbFdpZGdldC5wcmljZS5nZXRUZXh0KCkpXG4gICAgICAudG9FcXVhbCgnMTk1MS4zNycpO1xuICAgIGJyb3dzZXIudGFrZVNjcmVlbnNob3QoKVxuICAgICAgLnRoZW4oKHBuZzogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmVhbTogZnMuV3JpdGVTdHJlYW0gPSBmcy5jcmVhdGVXcml0ZVN0cmVhbSgnLi9pbWcxLnBuZycpO1xuICAgICAgICBzdHJlYW0ud3JpdGUobmV3IEJ1ZmZlcihwbmcsICdiYXNlNjQnKSk7XG4gICAgICAgIHN0cmVhbS5lbmQoKTtcbiAgICAgIH0pO1xuICB9KTtcbn0pO1xuIl19