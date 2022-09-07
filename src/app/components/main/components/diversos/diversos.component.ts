import { Component, OnInit } from '@angular/core';
import { ProductsCategorys } from '../products-category';
import { DiversosService } from './diversos.service';

@Component({
  selector: 'app-diversos',
  templateUrl: './diversos.component.html',
  styleUrls: ['./diversos.component.css']
})
export class DiversosComponent implements OnInit {

  products!: ProductsCategorys;

  constructor(private diversosService: DiversosService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.diversosService.userList().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => console.log('Error while fetching api..')
    })
  }
}
