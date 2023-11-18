import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Producto} from '../modelo/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url='http://localhost:8080'
  constructor(private http:HttpClient) { }

  public getProductos(){
    return this.http.get<Producto[]>(this.url+'/productos')
  }
  public agregarProducto(obj:Producto){
    return this.http.post<Producto>(this.url+'/productos/crear',obj)
  }
}
