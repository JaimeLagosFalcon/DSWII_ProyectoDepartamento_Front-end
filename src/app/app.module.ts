import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { AddPropietarioComponent } from './components/add-propietario/add-propietario.component';
import { AddIncidenteComponent } from './components/add-incidente/add-incidente.component';
import { AddServiciosComponent } from './components/add-servicios/add-servicios.component';
import { AddVisitanteComponent } from './components/add-visitante/add-visitante.component';
import { AddDepartamentoComponent } from './components/add-departamento/add-departamento.component';
import { LoginComponent } from './auth/login.component';
import { AddMascotaComponent } from './components/add-mascota/add-mascota.component';
import { AddEdificioComponent } from './components/add-edificio/add-edificio.component';
import { MenuComponent } from './menu/menu.component';

// IMPORTACION DE PAGINACIO
import { NgxPaginationModule } from 'ngx-pagination';
import { AddVisitaComponent } from './components/add-visita/add-visita.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUsuarioComponent,
    AddPropietarioComponent,
    AddIncidenteComponent,
    AddServiciosComponent,
    AddVisitanteComponent,
    AddDepartamentoComponent,
    LoginComponent,
    AddMascotaComponent,
    AddEdificioComponent,
    AddVisitaComponent,
    MenuComponent,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
