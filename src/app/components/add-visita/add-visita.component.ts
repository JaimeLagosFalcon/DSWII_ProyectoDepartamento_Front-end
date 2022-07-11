import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { Usuario } from 'src/app/models/usuario.model';
import { Visita } from 'src/app/models/visita.model';
import { Visitante } from 'src/app/models/visitante.model';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VisitaService } from 'src/app/services/visita.service';
import { VisitanteService } from 'src/app/services/visitante.service';

@Component({
  selector: 'app-add-visita',
  templateUrl: './add-visita.component.html',
  styleUrls: ['./add-visita.component.css']
})
export class AddVisitaComponent implements OnInit {

  dni: string = "";
  selVisitantes: number = -1;
  selDepartamentos: number = -1;
  estado: boolean = true;
  
  // Cargar Combo Box
  departamentos: Departamento[] = [];
  usuarios: Usuario[] = [];

  visitantes: Visitante[] = [];
  visitantes2: Visitante[] = [];

  // Grilla
  visitas: Visita[] = [];


  visita: Visita = {
    codvisita:0,
    horasalida: undefined,
    comentario: "",
    estado : 1,
    coddepartamento: {
      coddepartamento: -1
    },
    idUsuario: {
      idUsuario: 2
    },

    codvisitantes: {
      codvisitantes: -1
    }

  };

  // PAGINACION pageActual
  pageActual: number = 1;


  constructor(private departamentoService: DepartamentoService,
    private usuarioService: UsuarioService,
    private visitanteService: VisitanteService,
    private visitaService: VisitaService) {

    this.departamentoService.listaDepartamento().subscribe(
      (d) => this.departamentos = d
    );

    this.visitanteService.listaVisitante().subscribe(
      (v) => this.visitantes2 = v
    );

    this.usuarioService.listaUsuario().subscribe(
      (u) => this.usuarios = u
    );
  }

  saveVisita() {
    console.log(">>saveVisita");
    console.log(this.visita)
    this.visita.estado = 1;
    this.visitaService.create(this.visita).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje)
      },
      error => {
        console.error(error);
      },
    );
  }

  consultaVisitante() {
    this.visitaService.listaVisitante(this.dni).subscribe(
      (lv) => {
        this.visitantes = lv.lista;
        alert(lv.mensaje)
      }
    );
  }

  ConsultaVisita() {
    this.visitaService.listaVisita(this.selVisitantes, this.selDepartamentos, this.estado?1:0).subscribe(
      (v) => {
        this.visitas = v.lista;
        alert(v.mensaje);
      }
    );
  }

  busca(aux:Visita){
    console.log("==> buscar ==> codvisita ==> " + aux.codvisita);

    this.visita = aux;
  }

  actualizarVisita(){
    console.log(">>actualizarVisita");
    console.log(this.visita)
    
    this.visita.estado = 0;
    this.visitaService.actualiza(this.visita).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje)
      },
      error => {
        console.error(error);
      },
    );
  }

  ngOnInit(): void {
    
  }

 

}
