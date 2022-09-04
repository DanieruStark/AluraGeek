import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BannerComponent } from './components/banner/banner.component';
import { StarWarsComponent } from './components/star-wars/star-wars.component';
import { ConsolesComponent } from './components/consoles/consoles.component';



@NgModule({
  declarations: [
    MainComponent,
    BannerComponent,
    StarWarsComponent,
    ConsolesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
