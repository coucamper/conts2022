import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { ContenedorVOModule } from './models/contenedor-vo/contenedorModel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatRadioModule} from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { ClaseModel } from './models/claseModel';
import { ClienteModel } from './models/clienteModel';
import { VehiculosPesajesModel } from './models/vehiculosPesajesModel';
import { LlenadoModel } from './models/llenadoModel';
import { NgSelectModule } from '@ng-select/ng-select';
import { AveriaModel } from './models/averia-model.ts/averiaModel';
import { VehiculoModel } from './models/vehiculoModel';
import { NgPipesModule } from 'ng-pipes';
import { ModalModule } from 'ngx-bootstrap/modal';
import { tipoincidenciaModel } from './models/tipoincidenciaModel';
import { PermisoNoRetribuidoModel } from './models/permisonoretribuidoModel';
import { permisoretribuidoModel } from './models/permisoretribuidoModel';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from './models/module';












// COMPONENTES

import { AppComponent } from './app.component';
import { ContenedoresComponent } from './contenedores/contenedores.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { RutasComponent } from './rutas/rutas.component';
import { PanelComponent } from './panel/panel.component';
import { NavegacionComponent } from './shared/navegacion/navegacion.component';
import { ExportacionComponent } from './exportacion/exportacion.component';
import { PesajesComponent } from './pesajes/pesajes.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { ContenedorinsertarComponent } from './inserciones/contenedorinsertar/contenedorinsertar.component';
import { SalvarcargaComponent } from './inserciones/salvarcarga/salvarcarga.component';
import { SalvarpesajeComponent } from './inserciones/salvarpesaje/salvarpesaje.component';
import { SalvarrutaComponent } from './inserciones/salvarruta/salvarruta.component';
import { SalvarempleadoComponent } from './inserciones/salvarempleado/salvarempleado.component';
import { IncidenciasComponent } from './incidencias/incidencias.component';
import { SalvarincidenciaComponent } from './inserciones/salvarincidencia/salvarincidencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { RevisionesVehiculoComponent } from './revisiones-vehiculo/revisiones-vehiculo.component';
import { AveriasveComponent } from './averiasve/averiasve.component';
import { PesajeComponent } from './pesaje/pesaje.component';
import { SalvarcontenedorComponent } from './inserciones/salvarcontenedor/salvarcontenedor.component';
import { LlenadosComponent } from './llenados/llenados.component';
import { SalvarclaseComponent } from './inserciones/salvarclase/salvarclase.component';
import { BarraHerramientasComponent } from './shared/barra-herramientas/barra-herramientas.component';
import { BarraHerramientasPesajesComponent } from './shared/barra-herramientas-pesajes/barra-herramientas-pesajes.component';
import { BarraHerramientasExportacionComponent } from './shared/barra-herramientas-exportacion/barra-herramientas-exportacion.component';
import { BarraHerramientasEmpleadosComponent } from './shared/barra-herramientas-empleados/barra-herramientas-empleados.component';
import { BarraHerramientasRutasComponent } from './shared/barra-herramientas-rutas/barra-herramientas-rutas.component';
import { BarraHerramientasVehiculosComponent } from './shared/barra-herramientas-vehiculos/barra-herramientas-vehiculos.component';
import { BarraHerramIncidenciasvehiculosComponent } from './shared/barra-herram-incidenciasvehiculos/barra-herram-incidenciasvehiculos.component';
import { ClasesComponent } from './clases/clases.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RutaComponent } from './ruta/ruta.component';
import { ContenedoresrutasComponent } from './contenedoresrutas/contenedoresrutas.component';
import { SalvarcontenedorrutaComponent } from './inserciones/salvarcontenedorruta/salvarcontenedorruta.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { SalvarvehiculoComponent } from './inserciones/salvarvehiculo/salvarvehiculo.component';
import { PanelempleadoComponent } from './vistaEmpleado/panelempleado/panelempleado.component';
import { NavegacionconductorComponent } from './shared/navegacionconductor/navegacionconductor.component';
import { RutasjornadaComponent } from './vistaEmpleado/rutasjornada/rutasjornada.component';
import { LlenadomodalComponent } from './rutasjornada/llenadomodal/llenadomodal.component';
import { PeticionesComponent } from './vistaEmpleado/peticiones/peticiones.component';
import { PermisosNoRetribuidosComponent } from './vistaEmpleado/permisos-no-retribuidos/permisos-no-retribuidos.component';
import { PermisosretribuidosComponent } from './vistaEmpleado/permisosretribuidos/permisosretribuidos.component';
import { PesajesconductorComponent } from './vistaEmpleado/pesajesconductor/pesajesconductor.component';
import { HorasmedicoComponent } from './vistaEmpleado/horasmedico/horasmedico.component';
import { ContenedoresConductorComponent } from './vistaEmpleado/contenedores/contenedoresconductor.component';
import { VacacionesequipoComponent } from './vacacionesequipo/vacacionesequipo.component';











// Importar routes

import { APP_ROUTES } from './app.routes';
import { APP_ROUTING } from './app.routes'

// SERVICES

import { SalvarcontendorService } from './services/inserciones/salvarcontendor.service';
import { RutasService } from './services/rutas.service';
import { ContenedoresService } from './services/contenedores.service';
import { SalvarpesajeService } from './services/inserciones/salvarpesaje.service';
import { EmpleadosService } from './services/empleados.service';
import { VehiculosPesajesService } from './services/vehiculospesajes.service';
import { FilterPipe } from './pipes/filter.pipe';
import { LlenadosService } from './services/llenados.service';
import { AveriasService } from './services/averias.service';
import { UniquePipePipe } from './pipes/unique-pipe.pipe';
import { ZonasService } from './services/zonas.service';
import { TiposincidenciaService } from './services/tiposincidencia.service';
import { PermisosretribuidosService } from './services/permisosretribuidos.service';
import { PermisosnoretribuidosService } from './services/permisosnoretribuidos.service';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DemoComponent } from './demo-component/demo-component.component';
import { VacacionesComponent } from './vistaEmpleado/vacaciones/vacaciones.component';
import { VacacionesequipoService } from './services/vacacionesequipo.service';
import { vacacionEquipoModel } from './models/vacacionequipoModel';
import { MatIconModule } from '@angular/material/icon';
import { AvisosService } from './services/avisos.service';
import { AvisoModel } from './models/avisoModel';
import { LoginComponent } from './shared/login/login.component';










@NgModule({
  declarations: [
    AppComponent,
    ContenedoresComponent,
    ContenedorComponent,
    RutasComponent,
    PanelComponent,
    NavegacionComponent,
    ExportacionComponent,
    PesajesComponent,
    MensajeComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    ContenedorinsertarComponent,
    SalvarcargaComponent,
    SalvarpesajeComponent,
    SalvarrutaComponent,
    SalvarempleadoComponent,
    IncidenciasComponent,
    SalvarincidenciaComponent,
    RutaComponent,
    ContenedoresrutasComponent,
    SalvarcontenedorrutaComponent,
    VehiculosComponent,
    SalvarvehiculoComponent,
    ClasesComponent,
    ClientesComponent,
    SalvarclaseComponent,
    BarraHerramientasComponent,
    BarraHerramientasPesajesComponent,
    BarraHerramientasExportacionComponent,
    BarraHerramientasEmpleadosComponent,
    BarraHerramientasRutasComponent,
    BarraHerramientasVehiculosComponent,
    BarraHerramIncidenciasvehiculosComponent,
    FilterPipe,
    PesajeComponent,
    SalvarcontenedorComponent,
    LlenadosComponent,
    InicioComponent,
    RevisionesVehiculoComponent,
    AveriasveComponent,
    UniquePipePipe,
    PanelempleadoComponent,
    NavegacionconductorComponent,
    RutasjornadaComponent,
    LlenadomodalComponent,
    PeticionesComponent,
    PermisosretribuidosComponent,
    PermisosNoRetribuidosComponent,
    VacacionesComponent,
    HorasmedicoComponent,
    ContenedoresConductorComponent,
    PesajesconductorComponent,
    VacacionesequipoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( APP_ROUTES),
    HttpClientModule,
    ContenedorVOModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    CommonModule,
    VehiculoModel,
    ClaseModel,
    ClienteModel,
    VehiculosPesajesModel,
    LlenadoModel,
    NgSelectModule,
    AveriaModel,
    NgPipesModule,
    ModalModule.forRoot(),
    tipoincidenciaModel,
    permisoretribuidoModel,
    BrowserAnimationsModule,
    PermisoNoRetribuidoModel,
    DemoUtilsModule,
    vacacionEquipoModel,
    MatIconModule,
    AvisoModel
  ],
  providers: [
   ContenedoresService,
   RutasService,
   SalvarcontendorService,
   SalvarpesajeService,
   EmpleadosService,
   VehiculosPesajesService,
   LlenadosService,
   AveriasService,
   ZonasService,
   TiposincidenciaService,
   PermisosretribuidosService,
   PermisosnoretribuidosService,
   VacacionesequipoService,
   AvisosService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
