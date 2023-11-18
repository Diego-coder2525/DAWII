import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ListaProductosComponent,
    DetalleProductoComponent,
    CrearProductoComponent,
    EditarProductoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
