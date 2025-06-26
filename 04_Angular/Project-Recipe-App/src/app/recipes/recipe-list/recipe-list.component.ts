import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('Name', 'Description of recipe','https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg')
  ];

  constructor(){

  }


}
