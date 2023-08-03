import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'; // Importa el módulo MatCardModule
import {MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductoComponent } from './Product/producto/producto.component';
// import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './menu/menu.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { MateriaPrimaComponent } from './materia-prima/materia-prima.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProduccionComponent } from './produccion/produccion.component';
import { RecetasComponent } from './recetas/recetas.component';
import { LoginComponent } from './login/login.component'; // Import form modules
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductoComponent,
    MenuComponent,
    ProveedoresComponent,
    MateriaPrimaComponent,
    UsuarioComponent,
    ProduccionComponent,
    RecetasComponent,
    LoginComponent
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatDividerModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    // //Para formularios
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatAutocompleteModule




    // MatCarouselModule.forRoot() // Importar el módulo del carrusel en los imports

    
    
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
