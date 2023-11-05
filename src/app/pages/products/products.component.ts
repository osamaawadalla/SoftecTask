import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from './services/products.service';
import { Product } from 'src/app/core/models/product';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgFor,
    ProductCardComponent
  ],
  providers: [ProductsService],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getProducts(): void {
    this.subscription.add(this.productsService.getProducts()
      .subscribe({
        next: res => {
          console.log(res);
          this.products = res;
        }
      })
    )
  }

  itemByID(index: number, product: Product): number {
    return product.ProductId;
  }

}
