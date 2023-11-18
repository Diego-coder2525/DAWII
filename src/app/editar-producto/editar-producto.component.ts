import { Component, Input } from '@angular/core';
import { ProductoService } from '../producto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  @Input() productoEditado: any;
  @Input()
  mostrarFormularioEdicion!: boolean;

  constructor(private productoService: ProductoService) {}

  guardarCambios(): void {
    // Lógica para guardar los cambios en el backend
    this.productoService.editarProducto(this.productoEditado);

    // Cerrar el formulario de edición
    this.mostrarFormularioEdicion = false;
  }

  cancelarEdicion(): void {
    // Cancelar la edición y cerrar el formulario
    this.mostrarFormularioEdicion = false;
  }
}
