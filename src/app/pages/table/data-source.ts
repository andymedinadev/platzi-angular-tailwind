import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../models/product.model';

export class DataSourceProduct extends DataSource<Product> {
  private dataSubject = new BehaviorSubject<Product[]>([]);
  private originalData: Product[] = [];

  disconnect() {}

  connect(): Observable<Product[]> {
    return this.dataSubject.asObservable();
  }

  init(products: Product[]) {
    this.originalData = products;
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

  find(query: string): void {
    const lowerCaseQuery = query.trim().toLowerCase();
    const filteredProducts = this.originalData.filter((item) =>
      item.title.toLowerCase().includes(lowerCaseQuery),
    );

    this.dataSubject.next(filteredProducts);
  }
}
