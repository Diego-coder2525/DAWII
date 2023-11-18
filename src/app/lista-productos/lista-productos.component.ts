import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos!: any[];
  mostrarFormulario = false;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.actualizarListaProductos();
  }

  mostrarFormularioCreacion(): void {
    // Cambiar la bandera para mostrar el formulario
    this.mostrarFormulario = true;
  }

  productoCreado(nuevoProducto: any): void {
    // Este método se llama cuando se crea un nuevo producto desde el formulario
    this.mostrarFormulario = false; // Ocultar el formulario
    this.productoService.agregarProducto(nuevoProducto);
    this.actualizarListaProductos();
  }

  editarProducto(producto: any): void {
    console.log('Editar producto:', producto);
  }

  eliminarProducto(id: number): void {
    this.productoService.eliminarProducto(id);
    this.actualizarListaProductos();
  }

  private actualizarListaProductos(): void {
    this.productoService.obtenerProductos().subscribe((data: any[]) => {
      this.productos = data;
    });
  }
}
