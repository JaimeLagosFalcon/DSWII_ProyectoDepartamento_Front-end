import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Departamento } from 'src/app/models/departamento';
import { Mascotas } from 'src/app/models/mascotas.model';
import { Propietarios } from 'src/app/models/propietarios.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { MascotaService } from 'src/app/services/mascota.service';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-add-mascota',
  templateUrl: './add-mascota.component.html',
  styleUrls: ['./add-mascota.component.css']
})
export class AddMascotaComponent implements OnInit {

  // Cargar Combo Box
  departamentos : Departamento[] = [];
  propietarios : Propietarios[] = [];
  // Grilla
  mascotas : Mascotas[] = [];

  mascota:Mascotas={

    codpropietario:{
      codpropietario: -1
    }

  };

  // PAGINACION pageActual
  pageActual: number = 1;

  //las validaciones
  forms : FormGroup = this.formBuilder.group({
      nombremascota : ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]],
      edad :          ['', [Validators.required, Validators.pattern('[0-9]{1,3}')]],
      raza :          ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]],
      propietario :   ['', [Validators.min(1)]],
  });

  // para verificar que se pulsó el boton
  submitted = false;

  constructor(private propietarioService:PropietarioService,
              private mascotaService:MascotaService,
              private formBuilder:FormBuilder) {

                this.propietarioService.listaPropietario().subscribe(
                  (p) => this.propietarios = p
                );

 }

  saveMascota(){
    console.log(">>saveMascota");
    console.log(this.mascota);

    this.submitted = true;

    // finaliza el metodo si hay un error
    if (this.forms.invalid){
      return;
    }

    this.mascotaService.create(this.mascota).subscribe(
      response =>{
        console.log(response.mensaje);
        alert(response.mensaje)
        this.listaMascota();
      },
      error =>{
        console.error(error);    
      },
    );
  }
  
  listaMascota(){
    // Lista para Tabla de Mascota 
    this.mascotaService.listaMascota().subscribe(
      (m) => {
        this.mascotas = m.lista
        
      }
   );
 }

  ngOnInit(): void {
    this.listaMascota();
  }

}
