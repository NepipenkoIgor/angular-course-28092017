"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CartWidget = (function () {
    function CartWidget() {
        this.counter = protractor_1.element(protractor_1.by.css('app-cart .counter'));
        this.cart = protractor_1.element(protractor_1.by.css('app-cart'));
    }
    CartWidget.prototype.openCart = function () {
        this.cart.click();
    };
    return CartWidget;
}());
exports.CartWidget = CartWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2NvbW1vbi9jYXJ0L2NhcnQud2cudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2FuZ3VsYXItY291cnNlL2UyZS9jb21tb24vY2FydC9jYXJ0LndnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXdEO0FBRXhEO0lBSUU7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sNkJBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJ5LCBlbGVtZW50LCBFbGVtZW50RmluZGVyIH0gZnJvbSAncHJvdHJhY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBDYXJ0V2lkZ2V0IHtcbiAgcHVibGljIGNvdW50ZXI6IEVsZW1lbnRGaW5kZXI7XG4gIHB1YmxpYyBjYXJ0OiBFbGVtZW50RmluZGVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvdW50ZXIgPSBlbGVtZW50KGJ5LmNzcygnYXBwLWNhcnQgLmNvdW50ZXInKSk7XG4gICAgdGhpcy5jYXJ0ID0gZWxlbWVudChieS5jc3MoJ2FwcC1jYXJ0JykpO1xuICB9XG5cbiAgcHVibGljIG9wZW5DYXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FydC5jbGljaygpO1xuICB9XG59Il19