import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSkuComponent } from './form_demo/form-sku/form-sku.component';
import { FormSkuFormbuilderComponent } from './form_builder/form-sku-formbuilder/form-sku-formbuilder.component';


@NgModule({
  declarations: [
    AppComponent,
    FormSkuComponent,
    FormSkuFormbuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
