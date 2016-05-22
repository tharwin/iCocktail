"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var cocktailBar_service_1 = require('./cocktailBar.service');
var CocktailBarComponent = (function () {
    function CocktailBarComponent(router, cocktailBarService) {
        this.router = router;
        this.cocktailBarService = cocktailBarService;
        this.cocktailBars = [];
    }
    CocktailBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cocktailBarService.getCocktailBarList()
            .then(function (cocktailBars) { return _this.cocktailBars = cocktailBars; });
    };
    CocktailBarComponent.prototype.gotoDetail = function (cocktailBar) {
        var link = ['CocktailBarDetail', { id: cocktailBar.id }];
        this.router.navigate(link);
    };
    CocktailBarComponent = __decorate([
        core_1.Component({
            selector: 'cocktailBar',
            templateUrl: 'app/cocktailBar.component.html',
            styleUrls: ['app/cocktailBar.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, cocktailBar_service_1.CocktailBarService])
    ], CocktailBarComponent);
    return CocktailBarComponent;
}());
exports.CocktailBarComponent = CocktailBarComponent;
//# sourceMappingURL=cocktailBar.component.js.map