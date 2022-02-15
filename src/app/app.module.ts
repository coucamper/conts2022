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
import { VehiculoModel } from './models/vehiculoModel';
import { NgPipesModule } from 'ng-pipes';
import { ModalModule } from 'ngx-bootstrap/modal';
import { tipoincidenciaModel } from './models/tipoincidenciaModel';
import { PermisoNoRetribuidoModel } from './models/permisonoretribuidoModel';
import { permisoretribuidoModel } from './models/permisoretribuidoModel';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from './models/module';
import { CategoriaModel } from './models/categoriaModel';














// COMPONENTES

import { AppComponent } from './app.component';
import { ContenedoresComponent } from './contenedores/contenedores.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { RutasComponent } from './rutas/rutas.component';
import { PanelComponent } from './panel/panel.component';
import { NavegacionComponent } from './shared/navegacion/navegacion.component';
import { PesajesComponent } from './pesajes/pesajes.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { ContenedorinsertarComponent } from './inserciones/contenedorinsertar/contenedorinsertar.component';
import { SalvarpesajeComponent } from './inserciones/salvarpesaje/salvarpesaje.component';
import { SalvarrutaComponent } from './inserciones/salvarruta/salvarruta.component';

import { IncidenciasComponent } from './incidencias/incidencias.component';
import { SalvarincidenciaComponent } from './inserciones/salvarincidencia/salvarincidencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { PesajeComponent } from './pesaje/pesaje.component';
import { SalvarcontenedorComponent } from './inserciones/salvarcontenedor/salvarcontenedor.component';
import { LlenadosComponent } from './llenados/llenados.component';
import { BarraHerramientasComponent } from './shared/barra-herramientas/barra-herramientas.component';
import { BarraHerramientasPesajesComponent } from './shared/barra-herramientas-pesajes/barra-herramientas-pesajes.component';
import { BarraHerramientasEmpleadosComponent } from './shared/barra-herramientas-empleados/barra-herramientas-empleados.component';
import { BarraHerramientasRutasComponent } from './shared/barra-herramientas-rutas/barra-herramientas-rutas.component';
import { BarraHerramientasVehiculosComponent } from './shared/barra-herramientas-vehiculos/barra-herramientas-vehiculos.component';
import { BarraHerramIncidenciasvehiculosComponent } from './shared/barra-herram-incidenciasvehiculos/barra-herram-incidenciasvehiculos.component';
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
import { AsociarcontenedorComponent } from './inserciones/asociarcontenedor/asociarcontenedor.component';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';
import { ZonasComponent } from './zonas/zonas.component';
import { SalvarempleadoComponent } from './inserciones/salvarempleado/salvarempleado.component';
import { VacacionesComponent } from './vistaEmpleado/vacaciones/vacaciones.component';
import { JwPaginationModule } from 'jw-angular-pagination';









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
import { UniquePipePipe } from './pipes/unique-pipe.pipe';
import { ZonasService } from './services/zonas.service';
import { TiposincidenciaService } from './services/tiposincidencia.service';
import { PermisosretribuidosService } from './services/permisosretribuidos.service';
import { PermisosnoretribuidosService } from './services/permisosnoretribuidos.service';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DemoComponent } from './demo-component/demo-component.component';
import { VacacionesequipoService } from './services/vacacionesequipo.service';
import { vacacionEquipoModel } from './models/vacacionequipoModel';
import { MatIconModule } from '@angular/material/icon';
import { AvisosService } from './services/avisos.service';
import { AvisoModel } from './models/avisoModel';
import { LoginComponent } from './shared/login/login.component';
import { CategoriasService } from './services/categorias.service';
import { EmpleadocategoriaModel } from './models/empleadocategoria';
import { EmpleadocategoriaService } from './services/empleadocategoria.service';
import { ConcejosComarcasService } from './services/concejoscomarcas.service';
import { ComarcasRutaService } from './services/comarcasruta.service';
import { ComarcasRutaModel } from './models/comarcasrutaModel';
import { ComarcaService } from './services/comarca.service';
import { ComarcaModel } from './models/comarcaModel';
import { ContModule } from './models/contModel';
import { MantenimientosService } from './services/mantenimientos.service';
import { LocalidadesComponent } from './localidades/localidades.component';
import { LocalidadesService } from './services/localidades.service';
import { SharedComponent } from './shared/shared/shared.component';







@NgModule({
  declarations: [
    AppComponent,
    ContenedoresComponent,
    ContenedorComponent,
    RutasComponent,
    PanelComponent,
    NavegacionComponent,
    PesajesComponent,
    MensajeComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    ContenedorinsertarComponent,
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
    BarraHerramientasComponent,
    BarraHerramientasPesajesComponent,
    BarraHerramientasEmpleadosComponent,
    BarraHerramientasRutasComponent,
    BarraHerramientasVehiculosComponent,
    BarraHerramIncidenciasvehiculosComponent,
    FilterPipe,
    PesajeComponent,
    SalvarcontenedorComponent,
    LlenadosComponent,
    InicioComponent,
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
    LoginComponent,
    AsociarcontenedorComponent,
    MantenimientosComponent,
    ZonasComponent,
    LocalidadesComponent,
    SharedComponent
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
    NgPipesModule,
    ModalModule.forRoot(),
    tipoincidenciaModel,
    permisoretribuidoModel,
    BrowserAnimationsModule,
    PermisoNoRetribuidoModel,
    DemoUtilsModule,
    vacacionEquipoModel,
    MatIconModule,
    AvisoModel,
    CategoriaModel,
    EmpleadocategoriaModel,
    ComarcasRutaModel,
    ComarcaModel,
    ContModule,
    JwPaginationModule
  ],
  providers: [
   ContenedoresService,
   RutasService,
   SalvarcontendorService,
   SalvarpesajeService,
   EmpleadosService,
   VehiculosPesajesService,
   LlenadosService,
   ZonasService,
   TiposincidenciaService,
   PermisosretribuidosService,
   PermisosnoretribuidosService,
   VacacionesequipoService,
   AvisosService,
   CategoriasService,
   EmpleadocategoriaService,
   ComarcaService,
   MantenimientosService,
   LocalidadesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
