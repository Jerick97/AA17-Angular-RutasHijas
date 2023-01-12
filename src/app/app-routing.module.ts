import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { MisionComponent } from './pages/mision/mision.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { VisionComponent } from './pages/vision/vision.component';

const routes: Routes = [
  {path: '', component:HomeComponent}, //redireccionar al Home
  {path:'contacto',component:ContactoComponent},//redireccionar al Contacto
  {path:'nosotros',component:NosotrosComponent, children:[
    {path:'mision',component:MisionComponent}, //ruta hija Misión
    {path:'vision',component:VisionComponent} //ruta hija Vision
  ]}, //redireccionar al Nosotros
  {path:'404',component:NotFoundComponent}, //redireccionar al Not Found
  {path: '**', pathMatch:'full',redirectTo:'404'}//Cualquier url redirija al 404 Not Found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
