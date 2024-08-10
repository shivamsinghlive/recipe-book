import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

// using injectable because we want to use another service (shopping list service) inside recipe service
@Injectable()
export class RecipeService {

  constructor(private slService:ShoppingListService){}
  recipeSelected=new EventEmitter<Recipe>();

   private recipes: Recipe[]=[
        new Recipe('test recipe','test description','https://images.pexels.com/photos/7965916/pexels-photo-7965916.jpeg',[
          new Ingredient('test ing 1',1),
          new Ingredient('test ing 2 ',20)
        ]),
        new Recipe('test 2 recipe','test description','https://images.pexels.com/photos/7965916/pexels-photo-7965916.jpeg',[
          new Ingredient('test2 ing 1',1),
          new Ingredient('test2 ing 2 ', 2)
        ])
      ]

      getRecipes()
      {
        // return this.recipes; // this will give access to Original array
        return this.recipes.slice(); // giving copy of original array and not the original array itself
      }

      //adding ingredients to shopping list
      addIngredientsToShoppingList(ingredientList :Ingredient[])
      {
        this.slService.addIngredientsFromRecipe(ingredientList)
        
      }
    
}