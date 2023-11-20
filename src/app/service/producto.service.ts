import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Producto} from '../modelo/producto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url='http://localhost:8080'
  constructor(private http:HttpClient) { }

  public getProductos(){
    let head_options = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("auth_token"));
    return this.http.get<Producto[]>(this.url+'/prod/productos',{headers:head_options});
  }
  public agregarProducto(obj:Producto){
    console.log(obj);
    let head_options = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("auth_token"));
    return this.http.post<Producto>(this.url+'/prod/producto/crear',obj,{headers:head_options});
  }
  
}
