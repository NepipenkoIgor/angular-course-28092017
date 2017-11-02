"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var SearchWidget = (function () {
    function SearchWidget() {
        this.searchInput = protractor_1.element(protractor_1.by.css('app-search input'));
    }
    SearchWidget.prototype.search = function (text) {
        this.searchInput.sendKeys(text);
    };
    return SearchWidget;
}());
exports.SearchWidget = SearchWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvYW5ndWxhci1jb3Vyc2UvZTJlL2NvbW1vbi9zZWFyY2gvc2VhcmNoLndnLnRzIiwic291cmNlcyI6WyIvdmFyL3d3dy9hbmd1bGFyLWNvdXJzZS9lMmUvY29tbW9uL3NlYXJjaC9zZWFyY2gud2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBd0Q7QUFFeEQ7SUFHRTtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0sNkJBQU0sR0FBYixVQUFjLElBQVk7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJ5LCBlbGVtZW50LCBFbGVtZW50RmluZGVyIH0gZnJvbSAncHJvdHJhY3Rvcic7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hXaWRnZXQge1xuICBwdWJsaWMgc2VhcmNoSW5wdXQ6IEVsZW1lbnRGaW5kZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2VhcmNoSW5wdXQgPSBlbGVtZW50KGJ5LmNzcygnYXBwLXNlYXJjaCBpbnB1dCcpKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWFyY2godGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZWFyY2hJbnB1dC5zZW5kS2V5cyh0ZXh0KTtcbiAgfVxufSJdfQ==