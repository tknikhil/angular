import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductNgModuleComponent } from './product-ng-module/product-ng-module.component';

import {UserserviceService} from './userservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductNgModuleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserserviceService],//<--this is 2nd method
  bootstrap: [AppComponent]
})
export class AppModule { }
