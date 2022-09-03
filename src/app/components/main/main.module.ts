import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [
    MainComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
