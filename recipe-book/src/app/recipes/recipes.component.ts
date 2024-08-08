import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent {

  recipeSelectedEarlier:Recipe={} as Recipe;
  recipeDetailToBeDisplayed:boolean=false;

  constructor(private recipeService:RecipeService){
  }


  ngOnInit()
  {
    this.recipeService.recipeSelected.subscribe(
      (recipe : Recipe)=>{
        console.log(recipe)
        this.recipeSelectedEarlier=recipe;
        this.recipeDetailToBeDisplayed=true;
      }
    )
  }


}
