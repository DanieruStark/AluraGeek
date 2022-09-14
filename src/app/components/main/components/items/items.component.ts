import { Component, OnInit } from '@angular/core';
import { ProductsCategorys } from '../products-category';
import { ItemsService } from './items.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  productsStarWars!: ProductsCategorys;
  productsConsoles!: ProductsCategorys;
  productsDiversos!: ProductsCategorys;
  
  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.getProductsStarWars();
    this.getProductsConsoles();
    this.getProductsDiversos();
  }

  getProductsStarWars(){
    this.itemsService.userListStarWars().subscribe({
      next: (res) => {
        this.productsStarWars = res;
        console.log(res.length)
      },
      error: (err) => console.log('Error while fetching the api')
    })
  }
  getProductsConsoles(){
    this.itemsService.userListConsoles().subscribe({
      next: (res) => {
        this.productsConsoles = res;
      },
      error: (err) => console.log('Error while fetching the api')
    })
  }
  getProductsDiversos(){
    this.itemsService.userListDiversos().subscribe({
      next: (res) => {
        this.productsDiversos = res;
      },
      error: (err) => console.log('Error while fetching the api')
    })
  }
}
