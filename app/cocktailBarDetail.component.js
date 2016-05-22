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
var cocktail_service_1 = require('./cocktail.service');
var ingredientType_service_1 = require('./ingredientType.service');
var CocktailBarDetailComponent = (function () {
    function CocktailBarDetailComponent(routeParams, cocktailBarService, cocktailService, ingredientTypeService) {
        this.routeParams = routeParams;
        this.cocktailBarService = cocktailBarService;
        this.cocktailService = cocktailService;
        this.ingredientTypeService = ingredientTypeService;
        this.cocktails = [];
        this.ingredientTypes = [];
    }
    CocktailBarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.cocktailBarService.getCocktailBar(id)
            .then(function (cocktailBar) { return _this.cocktailBar = cocktailBar; });
        this.cocktailService.getCocktailList(id)
            .then(function (cocktails) { return _this.cocktails = cocktails; });
        this.ingredientTypeService.getIngredientTypeList()
            .then(function (ingredientTypes) { return _this.ingredientTypes = ingredientTypes; });
    };
    CocktailBarDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    CocktailBarDetailComponent = __decorate([
        core_1.Component({
            selector: 'cocktailBarDetail',
            templateUrl: 'app/cocktailBarDetail.component.html',
            styleUrls: ['app/cocktailBarDetail.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, cocktailBar_service_1.CocktailBarService, cocktail_service_1.CocktailService, ingredientType_service_1.IngredientTypeService])
    ], CocktailBarDetailComponent);
    return CocktailBarDetailComponent;
}());
exports.CocktailBarDetailComponent = CocktailBarDetailComponent;
//# sourceMappingURL=cocktailBarDetail.component.js.map