import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';



@NgModule({
  declarations: [
    MainComponent,
    BannerComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
