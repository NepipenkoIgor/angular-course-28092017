"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CartWidget = (function () {
    function CartWidget() {
        this.counter = protractor_1.element(protractor_1.by.css('app-cart .counter'));
        this.cart = protractor_1.element(protractor_1.by.css('app-cart'));
    }
    return CartWidget;
}());
exports.CartWidget = CartWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2NvbW1vbi9jYXJ0L2NhcnQud2cudHMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L2FuZ3VsYXItY291cnNlL2UyZS9jb21tb24vY2FydC9jYXJ0LndnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXdEO0FBRXhEO0lBSUU7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBS0gsaUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnksIGVsZW1lbnQsIEVsZW1lbnRGaW5kZXIgfSBmcm9tICdwcm90cmFjdG9yJztcblxuZXhwb3J0IGNsYXNzIENhcnRXaWRnZXQge1xuICBwdWJsaWMgY291bnRlcjogRWxlbWVudEZpbmRlcjtcbiAgcHVibGljIGNhcnQ6IEVsZW1lbnRGaW5kZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY291bnRlciA9IGVsZW1lbnQoYnkuY3NzKCdhcHAtY2FydCAuY291bnRlcicpKTtcbiAgICB0aGlzLmNhcnQgPSBlbGVtZW50KGJ5LmNzcygnYXBwLWNhcnQnKSk7XG4gIH1cblxuICAvLyBwdWJsaWMgb3BlbkZ1bGxDYXJkKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgLy8gICB0aGlzLmNhcmRzLmdldChpbmRleCkuY2xpY2soKTtcbiAgLy8gfVxufSJdfQ==