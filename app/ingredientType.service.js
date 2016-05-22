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
var mock_ingredientType_1 = require('./mock-ingredientType');
var IngredientTypeService = (function () {
    function IngredientTypeService() {
    }
    IngredientTypeService.prototype.getIngredientTypeList = function () {
        return Promise.resolve(mock_ingredientType_1.INGREDIENTS_TYPE).then(function (ingredientType) { return ingredientType; });
    };
    IngredientTypeService.prototype.getIngredientType = function (id) {
        return Promise.resolve(mock_ingredientType_1.INGREDIENTS_TYPE).then(function (ingredientType) { return ingredientType.filter(function (ingredientType) { return ingredientType.id === id; })[0]; });
    };
    IngredientTypeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], IngredientTypeService);
    return IngredientTypeService;
}());
exports.IngredientTypeService = IngredientTypeService;
//# sourceMappingURL=ingredientType.service.js.map