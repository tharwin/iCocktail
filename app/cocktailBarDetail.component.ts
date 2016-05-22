import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { RouteParams } from '@angular/router-deprecated';
import { CocktailBar } from './cocktailBar';
import { CocktailBarService } from './cocktailBar.service';
import { Cocktail } from './cocktail';
import { CocktailService } from './cocktail.service';
import { IngredientTypeService } from './ingredientType.service';
import { IngredientType } from './IngredientType';

@Component({
  selector: 'cocktailBarDetail',
  templateUrl: 'app/cocktailBarDetail.component.html',
  styleUrls: ['app/cocktailBarDetail.component.css']
})

export class CocktailBarDetailComponent implements OnInit {
  cocktailBar: CocktailBar;
  cocktails: Cocktail[] = [];
  ingredientTypes: IngredientType[] = [];
  constructor(
    private routeParams: RouteParams,
    private cocktailBarService: CocktailBarService,
    private cocktailService: CocktailService,
    private ingredientTypeService: IngredientTypeService
  ) {
  }
  ngOnInit() {
      let id = +this.routeParams.get('id');
      this.cocktailBarService.getCocktailBar(id)
        .then(cocktailBar => this.cocktailBar = cocktailBar);
      this.cocktailService.getCocktailList(id)
            .then(cocktails => this.cocktails = cocktails);
      this.ingredientTypeService.getIngredientTypeList()
                  .then(ingredientTypes => this.ingredientTypes = ingredientTypes);
  }
  goBack() {
    window.history.back();
  }
}
