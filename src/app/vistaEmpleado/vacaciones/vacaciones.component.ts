import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DemoComponent } from 'src/app/demo-component/demo-component.component';
import { DemoUtilsModule } from 'src/app/models/module';




@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.css']
})
export class VacacionesComponent implements OnInit {



  constructor() {

   }

  ngOnInit(): void {
  }

}
