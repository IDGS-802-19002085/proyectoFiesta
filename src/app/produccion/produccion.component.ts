import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa FormGroup y FormControl

@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.component.html',
  styleUrls: ['./produccion.component.css']
})
export class ProduccionComponent implements OnInit {
  ProduccionForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ProduccionForm = this.formBuilder.group({
      produccion: ['', Validators.required],
      descripcion: ['', Validators.required],
      costo: ['', Validators.required], 
      cantidad: ['', Validators.required],
      precio: ['', Validators.required], 
    });
  }
}