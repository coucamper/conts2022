import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgSelectModule } from '@ng-select/ng-select';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { ContenedorVOModule } from './models/contenedor-vo/contenedorModel';
import { ContenedoresService } from './services/contenedores.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contenedores';

  // contenedores: ContenedorVOModule [] = [];
  // dataSource = null;


  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  ngOnInit() {

  }

}
