import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { Propietarios } from 'src/app/models/propietarios.model';
import { Usuario } from 'src/app/models/usuario.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { PropietarioService } from 'src/app/services/propietario.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-propietario',
  templateUrl: './add-propietario.component.html',
  styleUrls: ['./add-propietario.component.css']
})
export class AddPropietarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  departamentos: Departamento[] = [];

  // Grilla
  propietarios: Propietarios[] = [];

  propietario: Propietarios = {
    idUsuario: {
      idUsuario: 2
    },
    coddepartamento: {
      coddepartamento: -1
    }
  }

  // PAGINACION pageActual
  pageActual: number = 1;

  constructor(private propietarioService: PropietarioService,
    private usuarioService: UsuarioService,
    private departamentoService: DepartamentoService) {

    this.usuarioService.listaUsuario().subscribe(
      (u) => this.usuarios = u
    );

    this.departamentoService.listaDepartamento().subscribe(
      (d) => this.departamentos = d
    );
  }

  savePropietario() {
    console.log(">>savePropietario");
    console.log(this.propietario);
    this.propietarioService.create(this.propietario).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje)
        this.listaPropietarios();
      },
      error => {
        console.error(error);
      },
    );
  }

  listaPropietarios(){
      this.propietarioService.listaPropietario().subscribe(
        (p) => {
          this.propietarios = p
        }
      );
  }

  ngOnInit(): void {
    this.listaPropietarios();
  }

}
