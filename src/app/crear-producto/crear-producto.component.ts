import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  @Output() productoCreado = new EventEmitter<any>();

  nuevoProducto: any = {
    id_producto: null,
    nombre: '',
    etiquetas: '',
    descripcion: '',
    precio: null,
    imagen: '',
    cantidad: null
  };

  agregarProducto(): void {
    // Verifica que los campos requeridos del nuevo producto estén llenos
    if (this.camposValidos()) {
      // Emitir el evento de producto creado con los detalles del nuevo producto
      this.productoCreado.emit(this.nuevoProducto);

      // Reiniciar el objeto nuevoProducto para el próximo uso
      this.nuevoProducto = {
        id_producto: null,
        nombre: '',
        etiquetas: '',
        descripcion: '',
        precio: null,
        imagen: '',
        cantidad: null
      };
    } else {
      // Muestra un mensaje de error o realiza alguna acción según tus necesidades
      console.error('Todos los campos obligatorios deben llenarse.');
    }
  }

  private camposValidos(): boolean {
    // Implementa la lógica para verificar si los campos requeridos están llenos
    // Puedes agregar validaciones personalizadas aquí

    return (
      this.nuevoProducto.nombre.trim() !== '' &&
      this.nuevoProducto.precio !== null &&
      this.nuevoProducto.cantidad !== null
    );
  }
}