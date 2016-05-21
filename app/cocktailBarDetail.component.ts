import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { RouteParams } from '@angular/router-deprecated';
import { CocktailBar } from './cocktailBar';
import { CocktailBarService } from './cocktailBar.service';
import { Cocktail } from './cocktail';
import { CocktailService } from './cocktail.service';

@Component({
  selector: 'cocktailBarDetail',
  templateUrl: 'app/cocktailBarDetail.component.html',
  styleUrls: ['app/cocktailBarDetail.component.css']
})

export class CocktailBarDetailComponent implements OnInit {
  cocktailBar: CocktailBar;
  cocktails: Cocktail[] = [];
  constructor(
    private routeParams: RouteParams,
    private cocktailBarService: CocktailBarService,
    private cocktailService: CocktailService) {
  }
  ngOnInit() {
      let id = +this.routeParams.get('id');
      this.cocktailBarService.getCocktailBar(id)
        .then(cocktailBar => this.cocktailBar = cocktailBar);
      this.cocktailService.getCocktailList(id)
            .then(cocktails => this.cocktails = cocktails);
  }
  goBack() {
    window.history.back();
  }
}
