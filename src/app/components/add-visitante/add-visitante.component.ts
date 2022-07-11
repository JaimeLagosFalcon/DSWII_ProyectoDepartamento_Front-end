import { Component, OnInit } from '@angular/core';
import { Propietarios } from 'src/app/models/propietarios.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Visitante } from 'src/app/models/visitante.model';
import { PropietarioService } from 'src/app/services/propietario.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VisitanteService } from 'src/app/services/visitante.service';

@Component({
  selector: 'app-add-visitante',
  templateUrl: './add-visitante.component.html',
  styleUrls: ['./add-visitante.component.css']
})
export class AddVisitanteComponent implements OnInit {

  propietarios: Propietarios[] = [];
  usuarios: Usuario[] = [];

  // Grilla
  visitantes: Visitante[] = [];

  visitante: Visitante = {

    idUsuario: {
      idUsuario: 2
    },
    codpropietario: {
      codpropietario: -1
    }

  }

    // PAGINACION pageActual
    pageActual: number = 1;

  constructor(private usuarioService: UsuarioService,
    private propietarioService: PropietarioService,
    private visitanteService: VisitanteService) {

    this.usuarioService.listaUsuario().subscribe(
      (u) => this.usuarios = u
    );

    this.propietarioService.listaPropietario().subscribe(
      (p) => this.propietarios = p
    );
  }

  saveVisitante() {
    console.log(">>saveVisitante");
    console.log(this.visitante);
    this.visitanteService.create(this.visitante).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje)
        this.listaVisitante();
      },
      error => {
        console.error(error);
      },
    );
  }

  listaVisitante() {
    // Lista para Tabla de Visitante
    this.visitanteService.listaVisitante().subscribe(
      (vi) => {
        this.visitantes = vi
      }
    );
  }

  ngOnInit(): void {
    this.listaVisitante();
  }

}
