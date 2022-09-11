import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDescriptionComponent } from './product-description/product-description/product-description.component';

const routes: Routes = [
  { path: '', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./all-products/all-products.module').then((m) => m.AllProductsModule)
  },
  {
    path: 'newProduct',
    loadChildren: () => import('./new-product/new-product.module').then((m) => m.NewProductModule)
  },
  {path: ':productId', component: ProductDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
