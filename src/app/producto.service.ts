import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:4200/producto';
  private productos: any[] = []; 
  private productoCreadoSubject = new Subject<any>();

  productoCreado$ = this.productoCreadoSubject.asObservable();

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<any[]> {
    return new Observable(observer => {
      observer.next(this.productos);
      observer.complete();
    });
  }

  agregarProducto(nuevoProducto: any): void {
    this.http.post<any>(`${this.apiUrl}/crear`, nuevoProducto).subscribe(
      (respuesta) => {
        // Lógica después de agregar el producto al backend (si es necesario)
        console.log('Producto agregado con éxito:', respuesta);

        // Emitir el evento de producto creado
        this.productoCreadoSubject.next(respuesta);
      },
      (error) => {
        console.error('Error al agregar el producto:', error);
      }
    );
  }

  editarProducto(productoEditado: any): void {
    const index = this.productos.findIndex(p => p.id === productoEditado.id);
    if (index !== -1) {
      this.productos[index] = productoEditado;
    }
  }

  eliminarProducto(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }


}
