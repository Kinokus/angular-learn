import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { AtributesComponent } from './components/atributes/atributes.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { TemplatesComponent } from './components/templates/templates.component';


@NgModule({
  declarations: [
    AppComponent, UserComponent, ProductComponent, CategoryComponent, BindingComponent, ConditionsComponent, AtributesComponent, InputOutputComponent, TemplatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
