import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReciepesComponent } from './reciepes/reciepes.component';
import { ReciepeListComponent } from './reciepes/reciepe-list/reciepe-list.component';
import { ReciepeItemComponent } from './reciepes/reciepe-list/reciepe-item/reciepe-item.component';
import { ReciepeDetailsComponent } from './reciepes/reciepe-details/reciepe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ReciepesComponent,
    ShoppingEditComponent,
    ReciepeListComponent,
    ReciepeDetailsComponent,
    ReciepeItemComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
