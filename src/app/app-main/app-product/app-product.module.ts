import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppProductListComponent } from './app-product-list/app-product-list.component';
import { AppProductDetailsComponent } from './app-product-list/app-product-details/app-product-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppProductListComponent, AppProductDetailsComponent]
})
export class ProductModule { }
