import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ProductServiceService } from './product-service.service';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
  
  BrowserModule,
  HttpModule,
  FormsModule,
  RouterModule.forRoot([
    {path:'list',component:ProductListComponent},
    {path:'create',component:AddProductComponent}
    
  ])
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
