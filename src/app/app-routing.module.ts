import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoComponent } from './Product/producto/producto.component'
import { ProveedoresComponent } from './proveedores/proveedores.component'
import { MateriaPrimaComponent } from './materia-prima/materia-prima.component'
import { UsuarioComponent } from './usuario/usuario.component'
import { ProduccionComponent } from './produccion/produccion.component'
import { RecetasComponent } from './recetas/recetas.component'




const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'Producto',component:ProductoComponent},
  {path:'Proveedores',component:ProveedoresComponent},
  {path:'Materiap',component:MateriaPrimaComponent},
  {path:'Usuario',component:UsuarioComponent},
  {path:'Produccion',component:ProduccionComponent},
  {path:'Recetas',component:RecetasComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
