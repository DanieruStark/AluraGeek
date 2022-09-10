import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsCategory } from 'src/app/components/main/components/products-category';
import { ProductDescriptionService } from '../product-description.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  productId!: number;
  productStarWars$!: Observable<ProductsCategory>;
  productConsoles$!: Observable<ProductsCategory>;
  productDiversos$!: Observable<ProductsCategory>;
  constructor(private productService: ProductDescriptionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['productId'];
    this.productStarWars$ = this.productService.buscaStarWarsIds(this.productId);
    this.productConsoles$ = this.productService.buscaConsolesIds(this.productId);
    this.productDiversos$ = this.productService.buscaDiversosIds(this.productId);
    
  }


}
