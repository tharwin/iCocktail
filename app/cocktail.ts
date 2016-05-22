import { Ingredient } from './ingredient';
export class Cocktail {
  id: number;
  name: string;
  amount: number;
  cocktailBarId: number;
  ingredients: Ingredient[];
}
