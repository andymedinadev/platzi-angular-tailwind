import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { DataSourceProduct } from './data-source';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BtnComponent } from '../../components/btn/btn.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    HttpClientModule,
    CdkTableModule,
    ReactiveFormsModule,
    NavbarComponent,
    BtnComponent,
    NgClass,
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  products: Product[] = [];
  total = 0;
  columns: string[] = ['id', 'title', 'price', 'cover', 'actions'];

  dataSource = new DataSourceProduct();

  input = new FormControl('', { nonNullable: true });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.dataSource.init(data);
        this.total = this.dataSource.getTotal();
      });

    this.input.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.dataSource.find(value);
    });
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }
}
