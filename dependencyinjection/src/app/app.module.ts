import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductNgModuleComponent } from './product-ng-module/product-ng-module.component';

import{ProductNgModule} from './product-ng-module/product-ng-module.module';
import{AnalyticDemoModule} from './analytic-demo/analytic-demo.module';

import { AnalyticDemoComponent } from './analytic-demo/analytic-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductNgModuleComponent,
    AnalyticDemoComponent
  ],

  // Register here every specific Module
  imports: [
    BrowserModule,
    ProductNgModule,
    AnalyticDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
