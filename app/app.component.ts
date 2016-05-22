import { Component }       from '@angular/core';
import { CocktailBarService } from './cocktailBar.service';
import { CocktailService } from './cocktail.service';
import { IngredientTypeService } from './ingredientType.service';
import { CocktailBarComponent } from './cocktailBar.component';
import { CocktailBarDetailComponent } from './cocktailBarDetail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'icocktail',
  template: `
  <h1>{{title}}</h1>
  <nav>
      <a [routerLink]="['CocktailBar']">Koktejl bary</a>
    </nav>
  <router-outlet></router-outlet>
`,  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    CocktailBarService,
    CocktailService,
    IngredientTypeService
  ],

})

@RouteConfig([
  {
  path: '/cocktailBar',
  name: 'CocktailBar',
  component: CocktailBarComponent,
  useAsDefault: true
},{
path: '/detail/:id',
name: 'CocktailBarDetail',
component: CocktailBarDetailComponent
}
])

export class AppComponent {
  title = 'iCocktail';
}
