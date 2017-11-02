"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var ProductsWidget = (function () {
    function ProductsWidget() {
        this.cards = protractor_1.element.all(protractor_1.by.css('app-card'));
    }
    ProductsWidget.prototype.openFullCard = function (index) {
        this.cards.get(index).click();
    };
    return ProductsWidget;
}());
exports.ProductsWidget = ProductsWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL3Byb2R1Y3RzL3Byb2R1Y3RzLndnLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9hbmd1bGFyLWNvdXJzZS9lMmUvcHJvZHVjdHMvcHJvZHVjdHMud2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBNkQ7QUFFN0Q7SUFHRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxxQ0FBWSxHQUFuQixVQUFvQixLQUFhO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBieSwgZWxlbWVudCwgRWxlbWVudEFycmF5RmluZGVyIH0gZnJvbSAncHJvdHJhY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0c1dpZGdldCB7XG4gIHB1YmxpYyBjYXJkczogRWxlbWVudEFycmF5RmluZGVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhcmRzID0gZWxlbWVudC5hbGwoYnkuY3NzKCdhcHAtY2FyZCcpKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuRnVsbENhcmQoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY2FyZHMuZ2V0KGluZGV4KS5jbGljaygpO1xuICB9XG59Il19