import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProductRoutingModule } from './new-product-routing.module';
import { NewProductComponent } from './new-product.component';
import { HeaderModule } from '../components/header/header.module';
import { FooterModule } from '../components/footer/footer.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewProductComponent
  ],
  imports: [
    CommonModule,
    NewProductRoutingModule,
    HeaderModule,
    FooterModule,
    FormsModule
  ]
})
export class NewProductModule { }
