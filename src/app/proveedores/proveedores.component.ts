import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa FormGroup y FormControl

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  proveedoresForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.proveedoresForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: [null, Validators.required],
      correo: ['', Validators.required],
    });
  }

}
