"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AppPage = (function () {
    function AppPage() {
    }
    AppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    AppPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return AppPage;
}());
exports.AppPage = AppPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5wby50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2FwcC5wby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFrRDtBQUVsRDtJQUFBO0lBUUEsQ0FBQztJQVBDLDRCQUFVLEdBQVY7UUFDRSxNQUFNLENBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNFLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBicm93c2VyLCBieSwgZWxlbWVudCB9IGZyb20gJ3Byb3RyYWN0b3InO1xuXG5leHBvcnQgY2xhc3MgQXBwUGFnZSB7XG4gIG5hdmlnYXRlVG8oKSB7XG4gICAgcmV0dXJuIGJyb3dzZXIuZ2V0KCcvJyk7XG4gIH1cblxuICBnZXRQYXJhZ3JhcGhUZXh0KCkge1xuICAgIHJldHVybiBlbGVtZW50KGJ5LmNzcygnYXBwLXJvb3QgaDEnKSkuZ2V0VGV4dCgpO1xuICB9XG59XG4iXX0=