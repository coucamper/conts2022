import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MultasService } from '../services/multas.service';

@Component({
  selector: 'app-multas',
  templateUrl: './multas.component.html',
  styleUrls: ['./multas.component.css']
})
export class MultasComponent implements OnInit {

  multas:any[] = [];

  constructor(
              private route: Router,
              private activatedRoute: ActivatedRoute,
              private _multa: MultasService
              )
              {

                this._multa.getMultas().subscribe((multas:any) =>{
                  this.multas=multas;
                  console.log(this.multas)
                });

               }

  ngOnInit(): void {
  }

}
