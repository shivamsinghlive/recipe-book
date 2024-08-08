import { Recipe } from "./recipe.model";

export class RecipeService {
   private recipes: Recipe[]=[
        new Recipe('test recipe','test description','https://images.pexels.com/photos/7965916/pexels-photo-7965916.jpeg'),
        new Recipe('test 2 recipe','test description','https://images.pexels.com/photos/7965916/pexels-photo-7965916.jpeg')
      ]

      getRecipes()
      {
        // return this.recipes; // this will give access to Original array
        return this.recipes.slice(); // giving copy of original array and not the original array itself
      }
    
}