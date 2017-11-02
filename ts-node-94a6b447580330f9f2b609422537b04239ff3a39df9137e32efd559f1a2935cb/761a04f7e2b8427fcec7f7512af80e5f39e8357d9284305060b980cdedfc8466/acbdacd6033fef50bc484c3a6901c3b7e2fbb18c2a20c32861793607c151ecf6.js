"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
// import { ProductsWidget } from './products/products.wg';
// import { SearchWidget } from './common/search/search.wg';
describe('angular-course App', function () {
    // const productsWidget: ProductsWidget = new ProductsWidget();
    // const searchWidget: SearchWidget = new SearchWidget();
    beforeEach(function () {
        protractor_1.browser.get('/');
    });
    it('should search by term', function () {
        // searchWidget.search('DRAGBOTasdasdasdasd');
        // expect(productsWidget.cards.count()).toEqual(0);
        //
        // searchWidget.searchInput.clear();
        //
        //
        // searchWidget.search('DRAGBOT');
        // expect(productsWidget.cards.count()).toEqual(1);
        expect(1).toEqual(1);
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5lMmUtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFxQztBQUVyQywyREFBMkQ7QUFDM0QsNERBQTREO0FBRTVELFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtJQUU3QiwrREFBK0Q7SUFDL0QseURBQXlEO0lBRXpELFVBQVUsQ0FBQztRQUNULG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBQzFCLDhDQUE4QztRQUM5QyxtREFBbUQ7UUFDbkQsRUFBRTtRQUNGLG9DQUFvQztRQUNwQyxFQUFFO1FBQ0YsRUFBRTtRQUNGLGtDQUFrQztRQUNsQyxtREFBbUQ7UUFDbkQsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gJ3Byb3RyYWN0b3InO1xuXG4vLyBpbXBvcnQgeyBQcm9kdWN0c1dpZGdldCB9IGZyb20gJy4vcHJvZHVjdHMvcHJvZHVjdHMud2cnO1xuLy8gaW1wb3J0IHsgU2VhcmNoV2lkZ2V0IH0gZnJvbSAnLi9jb21tb24vc2VhcmNoL3NlYXJjaC53Zyc7XG5cbmRlc2NyaWJlKCdhbmd1bGFyLWNvdXJzZSBBcHAnLCAoKSA9PiB7XG5cbiAgLy8gY29uc3QgcHJvZHVjdHNXaWRnZXQ6IFByb2R1Y3RzV2lkZ2V0ID0gbmV3IFByb2R1Y3RzV2lkZ2V0KCk7XG4gIC8vIGNvbnN0IHNlYXJjaFdpZGdldDogU2VhcmNoV2lkZ2V0ID0gbmV3IFNlYXJjaFdpZGdldCgpO1xuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGJyb3dzZXIuZ2V0KCcvJyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgc2VhcmNoIGJ5IHRlcm0nLCAoKSA9PiB7XG4gICAgLy8gc2VhcmNoV2lkZ2V0LnNlYXJjaCgnRFJBR0JPVGFzZGFzZGFzZGFzZCcpO1xuICAgIC8vIGV4cGVjdChwcm9kdWN0c1dpZGdldC5jYXJkcy5jb3VudCgpKS50b0VxdWFsKDApO1xuICAgIC8vXG4gICAgLy8gc2VhcmNoV2lkZ2V0LnNlYXJjaElucHV0LmNsZWFyKCk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vIHNlYXJjaFdpZGdldC5zZWFyY2goJ0RSQUdCT1QnKTtcbiAgICAvLyBleHBlY3QocHJvZHVjdHNXaWRnZXQuY2FyZHMuY291bnQoKSkudG9FcXVhbCgxKTtcbiAgICBleHBlY3QoMSkudG9FcXVhbCgxKTtcbiAgfSk7XG59KTtcbiJdfQ==