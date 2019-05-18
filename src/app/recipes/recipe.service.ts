import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/image/recipes/ck/11/04/fettuccine-olive-oil-ck-x.jpg?itok=bt5Cny7R'),
        new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/image/recipes/ck/11/04/fettuccine-olive-oil-ck-x.jpg?itok=bt5Cny7R'),
    ];

    getRecipes() {
        return this.recipes.slice()
    }
}