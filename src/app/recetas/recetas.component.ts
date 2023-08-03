import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa FormGroup y FormControl

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  RecetasForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.RecetasForm = this.formBuilder.group({
      ProductoId: ['', Validators.required],
      cantidad: ['', Validators.required],
      nombre: [null, Validators.required], 
      descripcion: ['', Validators.required],
    });
  }

}