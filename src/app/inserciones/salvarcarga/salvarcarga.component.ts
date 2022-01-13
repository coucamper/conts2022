import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ExportacionesService } from 'src/app/services/exportaciones.service';



@Component({
  selector: 'app-salvarcarga',
  templateUrl: './salvarcarga.component.html',
  styleUrls: ['./salvarcarga.component.css']
})
export class SalvarcargaComponent implements OnInit {

  formExport: FormGroup;

  cargas:any[] = [];
  clases:any[] = [];
  clientes:any[] = [];


  constructor( private router: Router,
               private fB: FormBuilder, private _cargas: ExportacionesService ) { 
                 
               this.crearFormulario();

                this._cargas.getExportaciones().subscribe( data => {
                  console.log(data);
                  this.cargas=data;

                this._cargas.getClases().subscribe( datos => {
                  console.log(datos);
                  this.clases=datos;
                })

                this._cargas.getClientes().subscribe( dat => {
                  console.log(dat);
                  this.clientes=dat;
                })

                
                })
               

               /*
  
  mensajes:any[] = [];

  constructor( private router:Router, private _mensajes: MensajesService ) { 
    this._mensajes.getMensajes().subscribe( data => {
      console.log(data);
      this.mensajes = data;
    })
  }
               */

  }

  ngOnInit(): void {}

 get fechatransNoValida(){
   return this.formExport.get('fechatrans')?.invalid && this.formExport.get('fechatrans')?.touched;
 }

 get idclienteNoValida(){
   return this.formExport.get('idcliente')?.invalid && this.formExport.get('idcliente')?.touched;
 }

 get candadoNoValida(){
   return this.formExport.get('candado')?.invalid && this.formExport.get('candado')?.touched;
 }

 get peso_locNoValida(){
   return this.formExport.get('peso_loc')?.invalid && this.formExport.get('peso_loc')?.touched;
 }

 get peso_cliNoValida(){
   return this.formExport.get('peso_cli')?.invalid && this.formExport.get('peso_cli')?.touched;
 }

 get claseNoValida(){
   return this.formExport.get('clase')?.invalid && this.formExport.get('clase')?.touched;
 }

 get preciotmNoValida(){
   return this.formExport.get('preciotm')?.invalid && this.formExport.get('preciotm')?.touched;
 }

 get tipopagoNoValida(){
   return this.formExport.get('tipopago')?.invalid && this.formExport.get('tipopago')?.touched;
 }


 


  crearFormulario(){

    this.formExport = this.fB.group({
      fechatrans: ['', [Validators.required] ],
      idcliente: ['', [Validators.required]],
      candado:['', [Validators.required, Validators.minLength(10)]],
      peso_loc: ['', Validators.required],
      peso_cli: ['', Validators.required],
      clase:['', Validators.required],
      preciotm:['', Validators.required],
      tipopago:['', Validators.required]
    });

  }




  guardar(){
    
    if( this.formExport.invalid ){

      return Object.values( this.formExport.controls ).forEach( control => {

        if( control instanceof FormGroup ){
          Object.values( control.controls ).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      })
      
    }

     this.formExport.reset({
       nombre:"Sin nombre"
     })
     console.log( this.formExport );



  }


}
