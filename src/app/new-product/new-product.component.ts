import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { NewProductService } from './new-product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  image = '';
  imageBanner = '';
  category = '';
  title = '';
  price = '';
  description = '';
  id = Math.floor(Math.random() * (100 - 1) + 1);

  constructor(private newProductService: NewProductService) {}

  ngOnInit(): void {}

  upload() {
    this.newProductService
      .upload(
        this.id,
        this.category,
        this.image,
        this.imageBanner,
        this.title,
        this.price,
        this.description
      )
      .subscribe({
        next: () => {
          console.log('criado com sucesso');
        },
        error: (err) => {
          alert('não foi possível criar o produto');
          console.log(err);
        },
      });
  }
}
