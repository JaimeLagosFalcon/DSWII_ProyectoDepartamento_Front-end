import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ubigeo } from 'src/app/models/ubigeo.model';
import { Usuario } from 'src/app/models/usuario.model';
import { TokenService } from 'src/app/security/token.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
 
  //
  user: Usuario[] = [];
  //roles: string[] = [];
  isAdmin = false;
  //Variables globales para los combobox
  departamentos: string[] = [];
  provincias: string[] = [];
  distritos: Ubigeo[] = [];
  filtro: string = "";

  //Variables seleccionadas
  usuario: Usuario = {
    idUbigeo: {
      idUbigeo: -1,
      departamento: "-1",
      provincia: "-1",
      distrito: "",
    },
  }

  constructor(private ubigeoService: UbigeoService, private usuarioService: UsuarioService,
    private tokenService: TokenService,private formBuilder: FormBuilder) {
    this.ubigeoService.listaDepartamento().subscribe(
      (x) => this.departamentos = x
    );
  }
  cargaProvincia() {
    console.log(">>> Carga Provincia >> ");
    console.log(">>> Departamento >> " + this.usuario.idUbigeo?.departamento);

    this.ubigeoService.listaProvincia(this.usuario.idUbigeo!.departamento).subscribe(
      (x) => this.provincias = x
    );

    this.usuario.idUbigeo!.provincia = "-1";
    this.distritos = [];
    this.usuario.idUbigeo!.idUbigeo = -1;

  }

  cargaDistrito() {
    console.log(">>> Carga Distrito >> ");
    console.log(">>> Departamento >> " + this.usuario.idUbigeo?.departamento);
    console.log(">>> Provincia >> " + this.usuario.idUbigeo?.provincia);

    this.ubigeoService.listaDistrito(this.usuario.idUbigeo?.departamento, this.usuario.idUbigeo?.provincia).subscribe(
      (x) => this.distritos = x
    );

    this.usuario.idUbigeo!.idUbigeo = -1;
  }
  lstUsuario(){
    this.usuarioService.listaUsuario();
  }

  insertado() {
    this.usuarioService.RegistraUsuario(this.usuario).subscribe(
      (x) => alert(x.mensaje)
    );
  }

  
  ngOnInit(): void {
  }
  
}
