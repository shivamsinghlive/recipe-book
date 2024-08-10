import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {


  ingredients: Ingredient[] = []
  constructor(private slService: ShoppingListService) { }
  ngOnInit() {
    this.ingredients = this.slService.getIngredients();//this is default 

    /*
      since,we are returning copy of original array,
      we need to have an event monitoring for any change in ingredient list[original array]
      and return copy of that originial array.
      As,changes are made in original array and not the copy which is displayed 
      here by default.
    */
   this.slService.ingredientChanged.subscribe(
    (ingredient : Ingredient[])=>{
      this.ingredients=ingredient;
    }
   )
  }




}
