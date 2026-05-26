import { Component } from '@angular/core';
import { ProductService, Product } from '../../services/product';
import { ProductCardComponent } from '../product-card/product-card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-products-list',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  productos: Product[] = [];
  constructor(private productService: ProductService) {
    // Nos suscribimos al BehaviorSubject para recibir la lista actualizada
    this.productService.productos$.subscribe((p) => {
      this.productos = p;
    });

    // Lanzamos la petición para cargar los productos desde la API
    this.productService.cargarProductos().subscribe({
      next: () => {},
      error: (err) => console.error('Error cargando productos desde ProductsList:', err),
    });
  }

  onEliminar(id: string) {
  console.log('Producto a eliminar:', id);
  // Aquí luego llamaremos al servicio
}
}