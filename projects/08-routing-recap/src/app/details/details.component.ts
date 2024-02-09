import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  title: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <p>{{ selectedProduct.title }}</p>
      <ul>
        <li>{{ selectedProduct.price }}</li>
        <li>{{ selectedProduct.description }}</li>
      </ul>
    </section>
  `,
  styles: ``,
})
export class DetailsComponent {
  productId!: number;
  selectedProduct!: Product;

  productList = [
    {
      title: 'Product 1',
      price: 9234,
      description: 'Product 1 is the best',
    },
    {
      title: 'Product 2',
      price: 3043,
      description: 'Product 2 is special',
    },
    {
      title: 'Product 3',
      price: 4355,
      description: 'Product 3 has my heart',
    },
  ];

  @Input() set id(value: number) {
    this.productId = value - 1;
    this.selectedProduct = this.productList[this.productId];
  }
}
