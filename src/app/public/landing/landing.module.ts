import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    LandingComponent
  ],
  exports: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSlideToggleModule,
    MatButtonModule
  ]
})
export class LandingModule { }
