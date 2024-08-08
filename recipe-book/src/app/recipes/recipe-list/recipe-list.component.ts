import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[]=[
    new Recipe('test recipe','test description','https://images.pexels.com/photos/7965916/pexels-photo-7965916.jpeg')
  ]

  constructor(){}
  onRecipeSelection(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);

  }

}
