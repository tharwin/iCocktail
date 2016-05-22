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
var cocktailBar_service_1 = require('./cocktailBar.service');
var cocktail_service_1 = require('./cocktail.service');
var ingredientType_service_1 = require('./ingredientType.service');
var cocktailBar_component_1 = require('./cocktailBar.component');
var cocktailBarDetail_component_1 = require('./cocktailBarDetail.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'iCocktail';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'icocktail',
            template: "\n  <h1>{{title}}</h1>\n  <nav>\n      <a [routerLink]=\"['CocktailBar']\">Koktejl bary</a>\n    </nav>\n  <router-outlet></router-outlet>\n", styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                cocktailBar_service_1.CocktailBarService,
                cocktail_service_1.CocktailService,
                ingredientType_service_1.IngredientTypeService
            ],
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/cocktailBar',
                name: 'CocktailBar',
                component: cocktailBar_component_1.CocktailBarComponent,
                useAsDefault: true
            }, {
                path: '/detail/:id',
                name: 'CocktailBarDetail',
                component: cocktailBarDetail_component_1.CocktailBarDetailComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map