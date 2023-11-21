import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelo/producto';
import { ProductoService } from '../service/producto.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  standalone:true,
  imports: [ReactiveFormsModule,MatInputModule,CommonModule,MatButtonModule]
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];

  productoForm = new FormGroup({
    cantidad: new FormControl(''),
    descripcion: new FormControl(''),
    etiquetas: new FormControl(''),
    imagen: new FormControl(''),
    nombre: new FormControl(''),
    precio: new FormControl('')
  });

  constructor(private servicio: ProductoService) {}

  ngOnInit(): void {
    this.getProductos();
  }

  private getProductos() {
    this.servicio.getProductos().subscribe(
      res => {
        console.log(res);
        this.productos = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  public agregarProducto(): void {
    const producto: Partial<Producto> = {
      cantidad: this.productoForm.get('cantidad')?.value,
      descripcion: this.productoForm.get('descripcion')?.value,
      etiquetas: this.productoForm.get('etiquetas')?.value,
      imagen: this.productoForm.get('imagen')?.value,
      nombre: this.productoForm.get('nombre')?.value,
      precio: this.productoForm.get('precio')?.value
    };
    
    if(producto.cantidad=="" || producto.descripcion=="" || producto.etiquetas=="" || producto.imagen=="" || producto.nombre=="" || producto.precio==""){
      alert("Faltan campos por llenar");
    }else{
      if(typeof producto.cantidad != "number" || typeof producto.precio != "number"){
        alert("Los campos de cantidad y precio deben ser numericos");
      }else{
        this.servicio.agregarProducto(producto).subscribe(
          res => {
            this.productos.push(res);
            this.productoForm.reset();
          },
          error => {
            console.log(error);
          }
        );
      }
      }
      
    
  }
    
  
}

