import { Injectable } from '@angular/core';
import { COCKTAIL } from './mock-cocktailList';

@Injectable()
export class CocktailService {
  getCocktailList(cocktailBarId: number) {
    return Promise.resolve(COCKTAIL).then(
        cocktail => cocktail.filter(cocktail => cocktail.cocktailBarId === cocktailBarId)
    );
  }
  getCocktail(id: number) {
    return Promise.resolve(COCKTAIL).then(
      cocktail => cocktail.filter(cocktail => cocktail.id === id)[0]

    );
  }

}
