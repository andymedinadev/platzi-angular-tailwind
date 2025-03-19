import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  CdkVirtualScrollViewport,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [
    HttpClientModule,
    ScrollingModule,
    NavbarComponent,
    NgFor,
    CdkVirtualScrollViewport,
  ],
  templateUrl: './scroll.component.html',
})
export class ScrollComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });
  }
}
