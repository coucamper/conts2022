import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PolizasService } from '../services/polizas.service';

@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css']
})
export class PolizasComponent implements OnInit {

  polizas:any[] = [];

  constructor(
              private route: Router,
              private activatedRoute: ActivatedRoute,
              private _polizas: PolizasService
              )

              {

                this._polizas.getPolizas().subscribe((pols:any) =>{
                  this.polizas=pols;
                  console.log(this.polizas)
                })

              }

  ngOnInit(): void {
  }

}
