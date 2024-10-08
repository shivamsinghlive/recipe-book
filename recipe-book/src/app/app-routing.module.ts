  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

/*

  empty path is part of all the path ,
  default path matching strategy is to use prefix matching
  so we need to use pathMatch : 'full' to make sure that it matches the 
  entire path

*/

const routes: Routes = [
  {path:'',redirectTo:'/recipes' , pathMatch:'full'},
  {path:'shopping-list' , component:ShoppingListComponent},
  {path:'recipes', component:RecipesComponent , children:[
    {path:'',component:RecipeStartComponent},
    {path:':id',component:RecipeDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
