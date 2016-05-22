import { Injectable } from '@angular/core';
import { INGREDIENTS_TYPE } from './mock-ingredientType';

@Injectable()
export class IngredientTypeService {
  getIngredientTypeList() {
    return Promise.resolve(INGREDIENTS_TYPE).then(
        ingredientType => ingredientType
    );
  }
  getIngredientType(id: number) {
    return Promise.resolve(INGREDIENTS_TYPE).then(
      ingredientType => ingredientType.filter(ingredientType => ingredientType.id === id)[0]

    );
  }

}
