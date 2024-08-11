import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
recipe:Recipe=new Recipe('','','',[])
id:number=-1;
  constructor(private recipeService : RecipeService,
    private route:ActivatedRoute
  ){}
 
  ngOnInit()
  {
    this.route.params.subscribe(
      (params:Params)=>{
        console.log(params)
        this.id= +params['id'];
        console.log(this.id)
        this.recipe=this.recipeService.getRecipeById(this.id)
        console.log(this.recipe)
      }
    )
  }

  onShoppingListClick()
  {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

}
