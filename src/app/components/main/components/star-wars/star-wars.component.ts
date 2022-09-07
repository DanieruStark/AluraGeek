import { Component, OnInit } from '@angular/core';
import { ProductsCategorys } from '../products-category';
import { StarWarsService } from './star-wars.service';


@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  products!: ProductsCategorys;
  
  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.starWarsService.userList().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => console.log('Error while fetching the api')
    })
  }
}
