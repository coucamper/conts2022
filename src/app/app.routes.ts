import { AutenticacionGuard } from "./guards/autenticacion.guard";

import { RouterModule, Routes } from "@angular/router";
import { AvisosComponent } from "./avisos/avisos.component";
import { ClienteComponent } from "./cliente/cliente.component";
import { ClientesComponent } from "./clientes/clientes.component";
import { ContenedoresComponent } from './contenedores/contenedores.component';
import { ContenedoresrutasComponent } from "./contenedoresrutas/contenedoresrutas.component";
import { EmpleadoComponent } from "./empleados/empleado/empleado.component";
import { EmpleadosComponent } from "./empleados/empleados.component";
import { IncidenciasComponent } from "./incidencias/incidencias.component";
import { InicioComponent } from "./inicio/inicio.component";
import { AsociarcontenedorComponent } from "./inserciones/asociarcontenedor/asociarcontenedor.component";
import { ContenedorinsertarComponent } from "./inserciones/contenedorinsertar/contenedorinsertar.component";
import { RespondermensajeComponent } from "./inserciones/respondermensaje/respondermensaje.component";
import { SalvaravisoComponent } from "./inserciones/salvaraviso/salvaraviso.component";
import { SalvarcontenedorComponent } from "./inserciones/salvarcontenedor/salvarcontenedor.component";
import { SalvarcontenedorrutaComponent } from "./inserciones/salvarcontenedorruta/salvarcontenedorruta.component";
import { SalvarempleadoComponent } from "./inserciones/salvarempleado/salvarempleado.component";
import { SalvarincidenciaComponent } from "./inserciones/salvarincidencia/salvarincidencia.component";
import { SalvarmantenimientoComponent } from "./inserciones/salvarmantenimiento/salvarmantenimiento.component";
import { SalvarmensajeComponent } from "./inserciones/salvarmensaje/salvarmensaje.component";
import { SalvarpesajeComponent } from "./inserciones/salvarpesaje/salvarpesaje.component";
import { SalvarrutaComponent } from "./inserciones/salvarruta/salvarruta.component";
import { SalvarvacacionesempleadoComponent } from "./inserciones/salvarvacacionesempleado/salvarvacacionesempleado.component";
import { SalvarvehiculoComponent } from "./inserciones/salvarvehiculo/salvarvehiculo.component";
import { LlenadosComponent } from "./llenados/llenados.component";
import { LocalidadesComponent } from "./localidades/localidades.component";
import { MantenimientoComponent } from "./mantenimiento/mantenimiento.component";
import { MantenimientosComponent } from "./mantenimientos/mantenimientos.component";
import { MultaComponent } from "./multa/multa.component";
import { MultasComponent } from "./multas/multas.component";
import { NivelesComponent } from "./niveles/niveles.component";
import { PanelComponent } from "./panel/panel.component";
import { PesajeComponent } from "./pesaje/pesaje.component";
import { PesajesComponent } from "./pesajes/pesajes.component";
import { PolizaComponent } from "./poliza/poliza.component";
import { PolizasComponent } from "./polizas/polizas.component";
import { RutaComponent } from "./ruta/ruta.component";
import { RutasComponent } from './rutas/rutas.component';
import { LoginComponent } from "./shared/login/login.component";
import { TurnosconductoresComponent } from "./turnosconductores/turnosconductores.component";
import { VacacionesempleadoComponent } from "./vacacionesempleado/vacacionesempleado.component";
import { VacacionesequipoComponent } from "./vacacionesequipo/vacacionesequipo.component";
import { VehiculosComponent } from "./vehiculos/vehiculos.component";
import { ContenedoresConductorComponent } from "./vistaEmpleado/contenedores/contenedoresconductor.component";
import { HorasmedicoComponent } from "./vistaEmpleado/horasmedico/horasmedico.component";
import { PanelempleadoComponent } from "./vistaEmpleado/panelempleado/panelempleado.component";
import { PermisosNoRetribuidosComponent } from "./vistaEmpleado/permisos-no-retribuidos/permisos-no-retribuidos.component";
import { PermisosretribuidosComponent } from "./vistaEmpleado/permisosretribuidos/permisosretribuidos.component";
import { PesajesconductorComponent } from "./vistaEmpleado/pesajesconductor/pesajesconductor.component";
import { PeticionesComponent } from "./vistaEmpleado/peticiones/peticiones.component";
import { RutasjornadaComponent } from "./vistaEmpleado/rutasjornada/rutasjornada.component";
import { VacacionesComponent } from "./vistaEmpleado/vacaciones/vacaciones.component";
import { ZonasComponent } from "./zonas/zonas.component";
import { RoleGuard } from "./guards/role.guard";
import { NivelesrutaComponent } from "./nivelesruta/nivelesruta.component";
import { SalvarcategoriaComponent } from "./inserciones/salvarempleado/salvarcategoria/salvarcategoria.component";
import { SalvarvacacionesgeneralComponent } from "./inserciones/salvarvacacionesgeneral/salvarvacacionesgeneral.component";
import { SalvarpolizaComponent } from "./inserciones/salvarpoliza/salvarpoliza.component";
import { SalvarmultaComponent } from "./inserciones/salvarmulta/salvarmulta.component";
import { RegistrarnivelcontenedorComponent } from "./inserciones/registrarnivelcontenedor/registrarnivelcontenedor.component";














export const APP_ROUTES: Routes = [
    { path: 'clientes', component: ClientesComponent, canActivate:[AutenticacionGuard] },
    { path: 'clientes/:id', component: ClienteComponent, canActivate:[AutenticacionGuard] },
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'panel', component: PanelComponent, canActivate:[AutenticacionGuard] },
    { path: 'panelempleado', component: PanelempleadoComponent, canActivate:[AutenticacionGuard] },
    { path: 'salvarmensaje', component: SalvarmensajeComponent, canActivate:[AutenticacionGuard] },
    { path: 'avisos', component: AvisosComponent, canActivate:[AutenticacionGuard] },
    { path: 'avisos/:page', component: AvisosComponent , canActivate:[AutenticacionGuard]},
    { path: 'salvaraviso', component: SalvaravisoComponent, canActivate:[AutenticacionGuard] },
    { path: 'respondermensaje/:id', component: RespondermensajeComponent ,canActivate:[AutenticacionGuard] },
    { path: 'empleados', component: EmpleadosComponent ,canActivate:[AutenticacionGuard] },
    { path: 'empleados/:page', component: EmpleadosComponent ,canActivate:[AutenticacionGuard] },
    { path: 'peticiones', component: PeticionesComponent },
    { path: 'permisosretribuidos', component: PermisosretribuidosComponent, canActivate:[AutenticacionGuard]},
    { path: 'permisosnoretribuidos', component: PermisosNoRetribuidosComponent , canActivate:[AutenticacionGuard]},
    { path: 'horasmedico', component: HorasmedicoComponent, canActivate:[AutenticacionGuard] },
    { path: 'vacacionesequipo', component: VacacionesequipoComponent ,canActivate:[AutenticacionGuard] },
    { path: 'vacacionesequipo/:page', component: VacacionesequipoComponent ,canActivate:[AutenticacionGuard] },
    { path: 'vacacionesempleado/:id', component: VacacionesempleadoComponent ,canActivate:[AutenticacionGuard]},
    { path: 'salvarvacacionesgeneral', component: SalvarvacacionesgeneralComponent , canActivate:[AutenticacionGuard]},
    { path: 'salvarvacaciones', component: SalvarvacacionesempleadoComponent , canActivate:[AutenticacionGuard]},
    { path: 'salvarvacaciones/:id', component: SalvarvacacionesempleadoComponent , canActivate:[AutenticacionGuard]},
    { path: 'editarvacaciones/:id/:vac', component: SalvarvacacionesempleadoComponent , canActivate:[AutenticacionGuard]},
    { path: 'empleado/:id', component: EmpleadoComponent ,canActivate:[AutenticacionGuard] },
    { path: 'salvarempleado', component: SalvarempleadoComponent ,canActivate:[AutenticacionGuard] },
    { path: 'salvarempleado/:id', component: SalvarempleadoComponent , canActivate:[AutenticacionGuard]},
    { path: 'salvarcategoria', component: SalvarcategoriaComponent ,canActivate:[AutenticacionGuard] },
    { path: 'rutas', component: RutasComponent, canActivate:[AutenticacionGuard] },
    { path: 'ruta/:id', component: RutaComponent, canActivate:[AutenticacionGuard]},
    { path: 'rutas/:page', component: RutasComponent, canActivate:[AutenticacionGuard]},
    { path: 'salvarruta', component: SalvarrutaComponent, canActivate:[AutenticacionGuard] },
    { path: 'salvarruta/:id', component: SalvarrutaComponent , canActivate:[AutenticacionGuard]},
    { path: 'zonas', component: ZonasComponent , canActivate:[AutenticacionGuard]},
    { path: 'zonas/:page', component: ZonasComponent , canActivate:[AutenticacionGuard]},
    { path: 'localidades', component: LocalidadesComponent , canActivate:[AutenticacionGuard]},
    { path: 'localidades/:page', component: LocalidadesComponent , canActivate:[AutenticacionGuard]},
    { path: 'vehiculos', component: VehiculosComponent, canActivate:[AutenticacionGuard]},
    { path: 'vehiculos/:page', component: VehiculosComponent, canActivate:[AutenticacionGuard]},
    { path: 'mantenimientos', component: MantenimientosComponent , canActivate:[AutenticacionGuard]},
    { path: 'mantenimientos/:page', component: MantenimientosComponent , canActivate:[AutenticacionGuard]},
    { path: 'salvarmantenimiento', component: SalvarmantenimientoComponent , canActivate:[AutenticacionGuard]},
    { path: 'salvarmantenimientoid/:id', component: SalvarmantenimientoComponent , canActivate:[AutenticacionGuard]},
    { path: 'mantenimiento', component: MantenimientoComponent , canActivate:[AutenticacionGuard]},
    { path: 'mantenimiento/:id', component: MantenimientoComponent , canActivate:[AutenticacionGuard]},
    { path: 'niveles/:id', component: NivelesComponent , canActivate:[AutenticacionGuard]},
    { path: 'nivelesruta/:page', component: NivelesrutaComponent , canActivate:[AutenticacionGuard]},
    { path: 'registrarnivel/:id', component: RegistrarnivelcontenedorComponent , canActivate:[AutenticacionGuard]},
    { path: 'salvarvehiculo', component: SalvarvehiculoComponent , canActivate:[AutenticacionGuard]},
    { path: 'salvarvehiculo/:id', component: SalvarvehiculoComponent , canActivate:[AutenticacionGuard]},
    { path: 'multas', component: MultasComponent, canActivate:[AutenticacionGuard]},
    { path: 'multas/:page', component: MultasComponent, canActivate:[AutenticacionGuard]},
    { path: 'multav/:id', component: MultaComponent, canActivate:[AutenticacionGuard]},
    { path: 'salvarmulta/:id', component: SalvarmultaComponent, canActivate:[AutenticacionGuard]},
    { path: 'polizas', component: PolizasComponent, canActivate:[AutenticacionGuard]},
    { path: 'polizas/:page', component: PolizasComponent, canActivate:[AutenticacionGuard]},
    { path: 'poliza/:id', component: PolizaComponent, canActivate:[AutenticacionGuard]},
    { path: 'salvarpoliza', component: SalvarpolizaComponent, canActivate:[AutenticacionGuard]},
    { path: 'contenedores', component: ContenedoresComponent , canActivate:[AutenticacionGuard], data: {role: 'ROLE_ADMIN'}},
    { path: 'contenedores/:page', component: ContenedoresComponent , canActivate:[AutenticacionGuard], data: {role: 'ROLE_ADMIN'}},
    { path: 'contenedoresconductor', component: ContenedoresConductorComponent , canActivate:[AutenticacionGuard] },
    { path: 'salvarcontenedor', component: SalvarcontenedorComponent , canActivate:[AutenticacionGuard]},
    { path: 'salvarcontenedor/:id', component: SalvarcontenedorComponent , canActivate:[AutenticacionGuard] },
    { path: 'contenedoresruta', component: ContenedoresrutasComponent , canActivate:[AutenticacionGuard]},
    { path: 'contenedoresruta/:id', component: ContenedoresrutasComponent , canActivate:[AutenticacionGuard]},
    { path: 'asociarcontenedor', component: AsociarcontenedorComponent , canActivate:[AutenticacionGuard]},
    { path: 'asociarcontenedor/:id', component: AsociarcontenedorComponent , canActivate:[AutenticacionGuard]},
    { path: 'insertarcontenedor', component: ContenedorinsertarComponent , canActivate:[AutenticacionGuard]},
    { path: 'pesajes', component: PesajesComponent , canActivate:[AutenticacionGuard]},
    { path: 'pesajes/:page', component: PesajesComponent , canActivate:[AutenticacionGuard]},
    { path: 'pesaje/:id', component: PesajeComponent , canActivate:[AutenticacionGuard]},
    { path: 'pesajesconductor', component: PesajesconductorComponent , canActivate:[AutenticacionGuard]},
    { path: 'salvarpesaje/', component: SalvarpesajeComponent , canActivate:[AutenticacionGuard]},
    { path: 'salvarpesaje/:id', component: SalvarpesajeComponent , canActivate:[AutenticacionGuard]},
    { path: 'insertarpesaje', component: SalvarpesajeComponent , canActivate:[AutenticacionGuard]},
    { path: 'incidencias', component: IncidenciasComponent , canActivate:[AutenticacionGuard]},
    { path: 'salvarincidencia', component: SalvarincidenciaComponent , canActivate:[AutenticacionGuard]},
    { path: 'llenados', component: LlenadosComponent , canActivate:[AutenticacionGuard]},
    { path: 'mapa', component: ContenedoresComponent , canActivate:[AutenticacionGuard]},
        /* RUTAS PARA LA VISTA CONDUCTOR */
    { path: 'rutasjornada', component: RutasjornadaComponent , canActivate:[AutenticacionGuard]},
    { path: '' , pathMatch: 'full', redirectTo: 'login' },
    { path: '**' , pathMatch: 'full', redirectTo: 'login' },



];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
