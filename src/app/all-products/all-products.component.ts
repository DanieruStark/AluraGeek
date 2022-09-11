import { Component, OnInit } from '@angular/core';
import { ProductsCategorys } from '../components/main/components/products-category';
import { AllProductsService } from './all-products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  productsStarWars!: ProductsCategorys;
  productsConsoles!: ProductsCategorys;
  productsDiversos!: ProductsCategorys;

  constructor(private allProductsService: AllProductsService) { }

  ngOnInit(): void {
    this.getProductsStarWars();
    this.getProductsConsoles();
    this.getProductsDiversos();
  }

  getProductsStarWars(){
    this.allProductsService.userListStarWars().subscribe({
      next: (res) => {
        this.productsStarWars = res;
      },
      error: (err) => console.log('Error while fetching the api')
    })
  }
  getProductsConsoles(){
    this.allProductsService.userListConsoles().subscribe({
      next: (res) => {
        this.productsConsoles = res;
      },
      error: (err) => console.log('Error while fetching the api')
    })
  }
  getProductsDiversos(){
    this.allProductsService.userListDiversos().subscribe({
      next: (res) => {
        this.productsDiversos = res;
      },
      error: (err) => console.log('Error while fetching the api')
    })
  }
}
