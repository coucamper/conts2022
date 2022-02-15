import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientosService } from '../services/mantenimientos.service';

@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styleUrls: ['./mantenimientos.component.css']
})
export class MantenimientosComponent implements OnInit {

  idx:number;
  mantenimientos:any[] = [];

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private _mantenimientos: MantenimientosService) {

                this._mantenimientos.getMantenimientos().subscribe((mantenimientos:any) => {
                  this.mantenimientos=mantenimientos;
                  console.log(this.mantenimientos)
                });

  }



  ngOnInit(): void {
  }



}
