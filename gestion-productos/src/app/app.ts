import { Component, signal } from '@angular/core';
import { ProductService, Product } from './services/product';
import { ProductsList } from './components/products-list/products-list';
import { ProductFormComponent } from './components/product-form/product-form';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from './components/product-filter/product-filter';


@Component({
  selector: 'app-root',
  imports: [CommonModule,ProductsList, ProductFormComponent, ProductFilterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('gestion-productos');

  constructor (private productService: ProductService){
    this.productService.cargarProductos().subscribe(
      (datos: Product[]) => {
        console.log('Productos cargados desde la API:', datos);
      }
    );
  }
    onProductoCreado(producto: any) {
    this.productService.agregarProducto(producto);
  }
}