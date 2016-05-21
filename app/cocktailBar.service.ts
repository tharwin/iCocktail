import { Injectable } from '@angular/core';
import { COCKTAIL_BAR } from './mock-cocktailBarList';


@Injectable()
export class CocktailBarService {
  getCocktailBarList() {
    return Promise.resolve(COCKTAIL_BAR);
  }
  getCocktailBar(id: number) {
    return Promise.resolve(COCKTAIL_BAR).then(
      cocktailBars => cocktailBars.filter(cocktailBar => cocktailBar.id === id)[0]

    );
  }

}
