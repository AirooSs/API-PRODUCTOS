import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html'
})
export class ProductCardComponent {

  @Input() product!: any; // Recibe un producto desde el padre

  constructor(private productService: ProductService) {
    
  }
  eliminar() {
  this.productService.eliminarProducto(this.product._id);
}
}