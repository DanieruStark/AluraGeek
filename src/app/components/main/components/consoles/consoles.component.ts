import { Component, OnInit } from '@angular/core';
import { ProductsCategorys } from '../products-category';
import { ConsolesService } from './consoles.service';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {
  
  products!: ProductsCategorys;

  constructor(private consolesService: ConsolesService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.consolesService.userList().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => console.log('Error while fetching the api')
    })
  }  
}
