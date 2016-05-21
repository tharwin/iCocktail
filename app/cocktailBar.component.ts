import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { CocktailBar } from './cocktailBar';
import { CocktailBarService } from './cocktailBar.service';


@Component({
  selector: 'cocktailBar',
  templateUrl: 'app/cocktailBar.component.html',
  styleUrls: ['app/cocktailBar.component.css']
})

export class CocktailBarComponent implements OnInit {
  cocktailBars: CocktailBar[] = [];
  constructor(
    private router: Router,
    private cocktailBarService: CocktailBarService) {
  }
  ngOnInit() {
    this.cocktailBarService.getCocktailBarList()
      .then(cocktailBars => this.cocktailBars = cocktailBars);
    }
  gotoDetail(cocktailBar: CocktailBar) {
    let link = ['CocktailBarDetail', { id: cocktailBar.id }];
    this.router.navigate(link);
  }
}
