import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {  

  @ViewChild('nameInput',{static:false}) nameInputElem : ElementRef<HTMLInputElement>={} as ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputElem : ElementRef<HTMLInputElement>={} as ElementRef;

 
  constructor(private slService : ShoppingListService){}

  onAddClick()
  {
    //emitting events with ingredient object
   const newIngName= this.nameInputElem.nativeElement.value;
    const newIngAmount=this.amountInputElem.nativeElement.value;
    const newIngredient=new Ingredient(newIngName,Number(newIngAmount));
    // this.ingAdded.emit(newIngredient);
    this.slService.addIngredient(newIngredient);
  
  }

}
