# RecipeBook

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



// shopping list and recipe book 
// push from recipe to shopping list 


planning the app 

layout the structure of the APP 

features : 
    shopping list
        shopping list component
        shopping list edit

    recipe book
        recipe list component
        recipe item
        recipe detail

components : 
    root component
    headers component

Models : 
    Ingredient [class]
    recipe [class]


    _____________________________

    creating header component 
        ng g c header/header 
    
    creating other components too
    creating basic structure of our recipe book
    > adding navigation bar in header 
    > created basic header with few navigations 

creating a recipe model
creating list of recipes
outputting the list of recipes created in the previous step

displaying recipe-details  

working on shopping list component
    need ingredients model class
    use ingredient model class in shopping list component
    > we create shared folder for ingredient model and other shared things
    use the ingredient blueprint / model in shopping list component

working on shopping list edit component
    for now -> just create a form
_________________________________________
    
adding navigation with event binding and ngIf

passing recipe data with property binding
    

_______________________________________________

implementing the logic to display recipe detail of the selected recipe only; else display some default text like "PLEASE SELECT A RECIPE"


-> adding features to shopping list edit 
-> building and using dropdown directive

functionality for future purpose : closing dropdown on clicking anywhere on the document [not restricting to clicking on that particular element of DOM]

_________________________________________________________________________

setting up services -- further enhancements
    we will need 2 services 
        recipe service
        shopping service
Managing RecipeService 
    what should it do for us ?
        recipe service - manage our recipes [move the list to service and make it pvt.]
            create getters [return this.recipe.slice() -> this will return a copy of list and not the original array -> we don't want others to have access to our OG array :)]
            --> add the recipeService in providers inside decorators of parent component [child can have the same instance of service]

Using service for cross-component communication
    -focus on instance creation [providers : [serviceName] -> this will aid in creation of one instance ; same instance across all the child components]

Adding ShoppingListService   
            we are moving ingredients logic to this service
            -we are providing this service in app.module.ts file because we want to access it from recipe and shopping-list [both the components]

passing ingredient from recipes to shopping list

_________________________________________________________________

                        ADDING ROUTER FUNCTIONALITY

setting up routes for recipes and shopping list

adding navigation to the app

            