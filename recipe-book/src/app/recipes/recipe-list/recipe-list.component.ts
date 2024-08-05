import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[]=[
    new Recipe('test recipe','test description','https://images.pexels.com/photos/7965916/pexels-photo-7965916.jpeg')
  ]

}
