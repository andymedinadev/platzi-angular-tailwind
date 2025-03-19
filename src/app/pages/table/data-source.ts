import { DataSource } from '@angular/cdk/collections';
import { Product } from '../../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSourceProduct extends DataSource<Product> {
  private dataSubject = new BehaviorSubject<Product[]>([]);

  disconnect() {}

  connect(): Observable<Product[]> {
    return this.dataSubject.asObservable();
  }

  init(products: Product[]) {
    this.dataSubject.next(products);
  }

  getTotal(): number {
    return this.dataSubject
      .getValue()
      .reduce((total, item) => total + item.price, 0);
  }

  update(id: Product['id'], changes: Partial<Product>) {
    const products = this.dataSubject.getValue();
    const productIndex = products.findIndex((item) => item.id === id);

    if (productIndex !== -1) {
      const updatedProduct = { ...products[productIndex], ...changes };
      products[productIndex] = updatedProduct;
      this.dataSubject.next([...products]);
    }
  }
}
