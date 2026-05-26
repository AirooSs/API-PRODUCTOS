import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductFormComponent {

  @Output() productoCreado = new EventEmitter();

  formulario = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    category: new FormControl(''),
    image: new FormControl(''),
    active: new FormControl(true)
  });

  enviar() {
    this.productoCreado.emit(this.formulario.value);
    this.formulario.reset({
      name: '',
      description: '',
      price: 0,
      category: '',
      image: '',
      active: true
    });
  }
}
