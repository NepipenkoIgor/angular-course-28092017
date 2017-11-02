"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CartModalWidget = (function () {
    function CartModalWidget() {
        this.cards = protractor_1.element.all(protractor_1.by.css('app-full-cart mat-card'));
        this.cartModal = protractor_1.element(protractor_1.by.css('app-full-cart'));
    }
    CartModalWidget.prototype.removeFromCart = function (index) {
        this.cards.get(index)
            .element(protractor_1.by.css('.remove'))
            .click();
    };
    return CartModalWidget;
}());
exports.CartModalWidget = CartModalWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2NvbW1vbi9jYXJ0L2NhcnRNb2RhbC53Zy50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2NvbW1vbi9jYXJ0L2NhcnRNb2RhbC53Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUE0RTtBQUU1RTtJQUlFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSx3Q0FBYyxHQUFyQixVQUFzQixLQUFhO1FBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzthQUNsQixPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMxQixLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBieSwgZWxlbWVudCwgRWxlbWVudEFycmF5RmluZGVyLCBFbGVtZW50RmluZGVyIH0gZnJvbSAncHJvdHJhY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBDYXJ0TW9kYWxXaWRnZXQge1xuICBwdWJsaWMgY2FyZHM6IEVsZW1lbnRBcnJheUZpbmRlcjtcbiAgcHVibGljIGNhcnRNb2RhbDogRWxlbWVudEZpbmRlcjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYXJkcyA9IGVsZW1lbnQuYWxsKGJ5LmNzcygnYXBwLWZ1bGwtY2FydCBtYXQtY2FyZCcpKTtcbiAgICB0aGlzLmNhcnRNb2RhbCA9IGVsZW1lbnQoYnkuY3NzKCdhcHAtZnVsbC1jYXJ0JykpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUZyb21DYXJ0KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNhcmRzLmdldChpbmRleClcbiAgICAgIC5lbGVtZW50KGJ5LmNzcygnLnJlbW92ZScpKVxuICAgICAgLmNsaWNrKCk7XG4gIH1cbn0iXX0=