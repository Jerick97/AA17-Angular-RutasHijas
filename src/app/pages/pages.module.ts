import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    NotFoundComponent,
    MisionComponent,
    VisionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    NotFoundComponent,
    MisionComponent,
    VisionComponent
  ]
})
export class PagesModule { }
