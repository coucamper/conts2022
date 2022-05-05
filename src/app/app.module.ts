import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoriaModel } from './models/categoriaModel';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxEchartsModule } from 'ngx-echarts';







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
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { ZonasComponent } from './zonas/zonas.component';
import { SalvarempleadoComponent } from './inserciones/salvarempleado/salvarempleado.component';
import { VacacionesComponent } from './vistaEmpleado/vacaciones/vacaciones.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { LoginComponent } from './shared/login/login.component';
import { LocalidadesComponent } from './localidades/localidades.component';
import { SharedComponent } from './shared/shared/shared.component';
import { MultasComponent } from './multas/multas.component';
import { PolizasComponent } from './polizas/polizas.component';





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
import { DemoComponent } from './demo-component/demo-component.component';
import { VacacionesequipoService } from './services/vacacionesequipo.service';
import { vacacionEquipoModel } from './models/vacacionequipoModel';
import { MatIconModule } from '@angular/material/icon';
import { AvisosService } from './services/avisos.service';
import { AvisoModel } from './models/avisoModel';
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
import { LocalidadesService } from './services/localidades.service';
import { MultasService } from './services/multas.service';
import { PolizasService } from './services/polizas.service';
import { PolizaComponent } from './poliza/poliza.component';
import { MultaComponent } from './multa/multa.component';
import { VacacionesempleadoComponent } from './vacacionesempleado/vacacionesempleado.component';
import { NivelesComponent } from './niveles/niveles.component';
import { NivelesContenedoresRutaService } from './services/nivelescontenedoresruta.service';
import { SalvarmantenimientoComponent } from './inserciones/salvarmantenimiento/salvarmantenimiento.component';
import { TipomantenimientoService } from './services/tipomantenimiento.service';
import { SalvarmensajeComponent } from './inserciones/salvarmensaje/salvarmensaje.component';
import { MensajeModel } from './models/mensajeModel';
import { TipoimportanciamensajeService } from './services/tipoimportanciamensaje.service';
import { SalvarvacacionesempleadoComponent } from './inserciones/salvarvacacionesempleado/salvarvacacionesempleado.component';
import { TipocontratoService } from './services/tipocontrato.service';
import { MensajeformularioModel } from './models/mensajeformularioModel';
import { RespondermensajeComponent } from './inserciones/respondermensaje/respondermensaje.component';
import { SalvaravisoComponent } from './inserciones/salvaraviso/salvaraviso.component';
import { AvisosComponent } from './avisos/avisos.component';
import { LoginModel } from './models/loginModel';
import { RolModel } from './models/rolModel';
import { UsuarioModel } from './models/usuarioModel';
import { ClientesComponent } from './clientes/clientes.component';
import { AuthInterceptor } from './services/auth-interceptor';
import { UsersAuthService } from './services/users-auth.service';
import { ConcejoModel } from './models/concejoModel';
import { PaginatorComponent } from './paginator/paginator.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PaginatorAvisosComponent } from './paginator/paginator-avisos/paginator-avisos.component';
import { AngularHolidayPlannerModule } from 'angular-holiday-planner';
import { GoogleChartComponent, GoogleChartsModule } from 'angular-google-charts';
import { TurnoEmpleadoModel } from './models/turnoEmpleadoModel';
import { TurnosconductoresComponent } from './turnosconductores/turnosconductores.component';
import { GraficapesajesComponent } from './graficapesajes/graficapesajes.component';
import { PaginatorContenedoresComponent } from './paginator/paginator-contenedores/paginator-contenedores.component';
import { PaginatorRutasComponent } from './paginator/paginator-rutas/paginator-rutas.component';
import { PaginatorComarcasComponent } from './paginator/paginator-comarcas/paginator-comarcas.component';
import { PaginatorVehiculosComponent } from './paginator/paginator-vehiculos/paginator-vehiculos.component';
import { PaginatorMantenimientosComponent } from './paginator/paginator-mantenimientos/paginator-mantenimientos.component';
import { PaginatorMultasComponent } from './paginator/paginator-multas/paginator-multas.component';
import { PaginatorPolizasComponent } from './paginator/paginator-polizas/paginator-polizas.component';
import { PaginatorPesajesComponent } from './paginator/paginator-pesajes/paginator-pesajes.component';
import { PaginatorEmpleadosComponent } from './paginator/paginator-empleados/paginator-empleados.component';
import { PaginatorVacacionesComponent } from './paginator/paginator-vacaciones/paginator-vacaciones.component';
import { PaginatorNivelesComponent } from './paginator/paginator-niveles/paginator-niveles.component';
import { NivelesrutaComponent } from './nivelesruta/nivelesruta.component';
import { contratoEmpleadoModel } from './models/contratoempleadoModel';
import { EmpleadoRecuperadoModel } from './models/empleadoRecuperadoModel';
import { SalvarcategoriaComponent } from './inserciones/salvarempleado/salvarcategoria/salvarcategoria.component';
import { ReversepipePipe } from './pipes/reversepipe.pipe';
import { VacacionEmpleado } from './models/vacacioneEmpleado';
import { SalvarvacacionesgeneralComponent } from './inserciones/salvarvacacionesgeneral/salvarvacacionesgeneral.component';
import { VacacionGeneralModel } from './models/vacaciongeneralModel';
import { SalvarpolizaComponent } from './inserciones/salvarpoliza/salvarpoliza.component';
import { SalvarmultaComponent } from './inserciones/salvarmulta/salvarmulta.component';
import { PolizaModule } from './models/polizaModel';
import { RegistrarnivelcontenedorComponent } from './inserciones/registrarnivelcontenedor/registrarnivelcontenedor.component';
import { NivelContenedorModel } from './models/NivelContenedorModel';
import { CardnivelesComponent } from './cardniveles/cardniveles.component';
import { NivelContenedorRuta } from './models/NivelContenedorRutaModel';







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
    SharedComponent,
    MantenimientoComponent,
    MultasComponent,
    PolizasComponent,
    PolizaComponent,
    MultaComponent,
    VacacionesempleadoComponent,
    NivelesComponent,
    SalvarmantenimientoComponent,
    SalvarmensajeComponent,
    SalvarvacacionesempleadoComponent,
    RespondermensajeComponent,
    SalvaravisoComponent,
    AvisosComponent,
    ClientesComponent,
    PaginatorComponent,
    ClienteComponent,
    PaginatorAvisosComponent,
    TurnosconductoresComponent,
    GraficapesajesComponent,
    PaginatorContenedoresComponent,
    PaginatorRutasComponent,
    PaginatorComarcasComponent,
    PaginatorVehiculosComponent,
    PaginatorMantenimientosComponent,
    PaginatorMultasComponent,
    PaginatorPolizasComponent,
    PaginatorPesajesComponent,
    PaginatorEmpleadosComponent,
    PaginatorVacacionesComponent,
    PaginatorNivelesComponent,
    NivelesrutaComponent,
    SalvarcategoriaComponent,
    ReversepipePipe,
    SalvarvacacionesgeneralComponent,
    SalvarpolizaComponent,
    SalvarmultaComponent,
    RegistrarnivelcontenedorComponent,
    CardnivelesComponent
  ],
  imports: [
    NgxPaginationModule,
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
    vacacionEquipoModel,
    MatIconModule,
    AvisoModel,
    CategoriaModel,
    EmpleadocategoriaModel,
    ComarcasRutaModel,
    ComarcaModel,
    ConcejoModel,
    ContModule,
    JwPaginationModule,
    MensajeModel,
    EmpleadocategoriaModel,
    MensajeformularioModel,
    contratoEmpleadoModel,
    LoginModel,
    GoogleChartsModule,
    EmpleadoRecuperadoModel,
    TurnoEmpleadoModel,
    VacacionGeneralModel,
    PolizaModule,
    VacacionEmpleado,
    NivelContenedorModel,
    NivelContenedorRuta,
    RolModel,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    UsuarioModel,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: ['localhost:8093'],
        disallowedRoutes: []
      }
    }),

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
   LocalidadesService,
   MultasService,
   PolizasService,
   NivelesContenedoresRutaService,
   TipomantenimientoService,
   TipoimportanciamensajeService,
   TipocontratoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
