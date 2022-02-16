
import { RouterModule, Routes } from "@angular/router";
import { ContenedoresComponent } from './contenedores/contenedores.component';
import { ContenedoresrutasComponent } from "./contenedoresrutas/contenedoresrutas.component";
import { EmpleadoComponent } from "./empleados/empleado/empleado.component";
import { EmpleadosComponent } from "./empleados/empleados.component";
import { IncidenciasComponent } from "./incidencias/incidencias.component";
import { InicioComponent } from "./inicio/inicio.component";
import { AsociarcontenedorComponent } from "./inserciones/asociarcontenedor/asociarcontenedor.component";
import { ContenedorinsertarComponent } from "./inserciones/contenedorinsertar/contenedorinsertar.component";
import { SalvarcontenedorComponent } from "./inserciones/salvarcontenedor/salvarcontenedor.component";
import { SalvarcontenedorrutaComponent } from "./inserciones/salvarcontenedorruta/salvarcontenedorruta.component";
import { SalvarempleadoComponent } from "./inserciones/salvarempleado/salvarempleado.component";
import { SalvarincidenciaComponent } from "./inserciones/salvarincidencia/salvarincidencia.component";
import { SalvarpesajeComponent } from "./inserciones/salvarpesaje/salvarpesaje.component";
import { SalvarrutaComponent } from "./inserciones/salvarruta/salvarruta.component";
import { SalvarvehiculoComponent } from "./inserciones/salvarvehiculo/salvarvehiculo.component";
import { LlenadosComponent } from "./llenados/llenados.component";
import { LocalidadesComponent } from "./localidades/localidades.component";
import { MantenimientoComponent } from "./mantenimiento/mantenimiento.component";
import { MantenimientosComponent } from "./mantenimientos/mantenimientos.component";
import { PanelComponent } from "./panel/panel.component";
import { PesajeComponent } from "./pesaje/pesaje.component";
import { PesajesComponent } from "./pesajes/pesajes.component";
import { RutaComponent } from "./ruta/ruta.component";
import { RutasComponent } from './rutas/rutas.component';
import { LoginComponent } from "./shared/login/login.component";
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









export const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'panel', component: PanelComponent },
    { path: 'panelempleado', component: PanelempleadoComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'peticiones', component: PeticionesComponent },
    { path: 'permisosretribuidos', component: PermisosretribuidosComponent },
    { path: 'permisosnoretribuidos', component: PermisosNoRetribuidosComponent},
    { path: 'horasmedico', component: HorasmedicoComponent },
    { path: 'vacacionesequipo', component: VacacionesequipoComponent },
    { path: 'vacaciones/:id', component: VacacionesComponent },
    { path: 'empleado/:id', component: EmpleadoComponent },
    { path: 'salvarempleado', component: SalvarempleadoComponent },
    { path: 'salvarempleado/:id', component: SalvarempleadoComponent },
    { path: 'rutas', component: RutasComponent },
    { path: 'ruta/:id', component: RutaComponent},
    { path: 'salvarruta', component: SalvarrutaComponent },
    { path: 'salvarruta/:id', component: SalvarrutaComponent },
    { path: 'zonas', component: ZonasComponent },
    { path: 'localidades', component: LocalidadesComponent },
    { path: 'vehiculos', component: VehiculosComponent},
    { path: 'mantenimientos', component: MantenimientosComponent},
    { path: 'mantenimiento', component: MantenimientoComponent},
    { path: 'mantenimiento/:id', component: MantenimientoComponent},
    { path: 'salvarvehiculo', component: SalvarvehiculoComponent},
    { path: 'salvarvehiculo/:id', component: SalvarvehiculoComponent},
    { path: 'contenedores', component: ContenedoresComponent },
    { path: 'contenedoresconductor', component: ContenedoresConductorComponent },
    { path: 'salvarcontenedor', component: SalvarcontenedorComponent },
    { path: 'salvarcontenedor/:id', component: SalvarcontenedorComponent },
    { path: 'contenedoresruta', component: ContenedoresrutasComponent },
    { path: 'contenedoresruta/:id', component: ContenedoresrutasComponent },
    { path: 'asociarcontenedor/:id', component: AsociarcontenedorComponent },
    { path: 'insertarcontenedor', component: ContenedorinsertarComponent },
    { path: 'pesajes', component: PesajesComponent },
    { path: 'pesaje/:id', component: PesajeComponent },
    { path: 'pesajesconductor', component: PesajesconductorComponent },
    { path: 'salvarpesaje/', component: SalvarpesajeComponent },
    { path: 'salvarpesaje/:id', component: SalvarpesajeComponent },
    { path: 'insertarpesaje', component: SalvarpesajeComponent },
    { path: 'incidencias', component: IncidenciasComponent},
    { path: 'salvarincidencia', component: SalvarincidenciaComponent },
    { path: 'llenados', component: LlenadosComponent},
    { path: 'mapa', component: ContenedoresComponent },
        /* RUTAS PARA LA VISTA CONDUCTOR */
    { path: 'rutasjornada', component: RutasjornadaComponent},
    { path: '' , pathMatch: 'full', redirectTo: 'panel' },
    { path: '**' , pathMatch: 'full', redirectTo: 'panel' },



];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
