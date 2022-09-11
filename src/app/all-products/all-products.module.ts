import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products.component';
import { HeaderModule } from '../components/header/header.module';
import { FooterModule } from '../components/footer/footer.module';


@NgModule({
  declarations: [
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    AllProductsRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class AllProductsModule { }
