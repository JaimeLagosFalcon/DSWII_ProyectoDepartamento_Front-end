import { Component, OnInit } from '@angular/core';

import { Departamento } from 'src/app/models/departamento';
import { Edificio } from 'src/app/models/edificio.model';
import { Usuario } from 'src/app/models/usuario.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EdificioService } from 'src/app/services/edificio.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-departamento',
  templateUrl: './add-departamento.component.html',
  styleUrls: ['./add-departamento.component.css']
})
export class AddDepartamentoComponent implements OnInit {

  usuarios: Usuario[] = [];
  edificios: Edificio[] = [];

  // Grilla
  departamentos: Departamento[] = [];

  departamento: Departamento = {
    codedificio: {
      codedificio: -1
    },
    idUsuario: {
      idUsuario: 2
    }

  }

  // PAGINACION pageActual
  pageActual: number = 1;


  constructor(private departamentoService: DepartamentoService,
    private usuarioService: UsuarioService,
    private edificioService: EdificioService) {

    this.usuarioService.listaUsuario().subscribe(
      (u) => this.usuarios = u
    );

    this.edificioService.listaEdificio().subscribe(
      (e) => this.edificios = e
    );
  }




  saveDepartamento() {
    console.log(">>saveDepartamento");
    console.log(this.departamento);
    this.departamentoService.create(this.departamento).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje)
        this.listadoDepartamentos();
      },
      error => {
        console.error(error);
      },
    );
  }

  listadoDepartamentos(){
    // Lista para Tabla de Departamento
    this.departamentoService.listaDepartamento().subscribe(
      (d) => {
        this.departamentos = d
      }
    );
  }

  ngOnInit(): void {
    this.listadoDepartamentos();
  }

}
