import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa FormGroup y FormControl

@Component({
  selector: 'app-materia-prima',
  templateUrl: './materia-prima.component.html',
  styleUrls: ['./materia-prima.component.css']
})
export class MateriaPrimaComponent implements OnInit {
  MateriaPForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.MateriaPForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidad: ['', Validators.required], 
      precio: ['', Validators.required],
      costo: ['', Validators.required], 
      medida: ['', Validators.required],
      proveedor: ['', Validators.required],
    });
  }
}