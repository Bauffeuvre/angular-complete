import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './components/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-book/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping list/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './components/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    HeaderComponent,
    RecipeDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
