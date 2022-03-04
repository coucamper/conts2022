import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientoModule } from 'src/app/models/mantenimientoModel';
import { MantenimientosService } from 'src/app/services/mantenimientos.service';
import { TipomantenimientoService } from 'src/app/services/tipomantenimiento.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-salvarmantenimiento',
  templateUrl: './salvarmantenimiento.component.html',
  styleUrls: ['./salvarmantenimiento.component.css']
})
export class SalvarmantenimientoComponent implements OnInit {

  idx:number;
  formMantenimiento:FormGroup;
  mantenimiento:MantenimientoModule = new MantenimientoModule();
  manten:MantenimientoModule;
  idExiste:boolean = false;
  tiposmantenimiento:any[] = [];
  vehiculos:any[] = [];
  idvehiculo:number;
  idTipoMante:number;
  control:any;
  controlTipoMantenimento:any;

  constructor(private router: Router,
              private fB: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private _tiposmante: TipomantenimientoService,
              private _mantenimientos: MantenimientosService,
              private _vehiculos: VehiculosService ) {

                this.idx = this.activatedRoute.snapshot.params['id'];

                if(this.idx){
                  this.idExiste=true;
                }else{
                  this.idExiste=false;
                }

                this._tiposmante.getTiposmantenimiento().subscribe((tipos:any) =>{
                  this.tiposmantenimiento=tipos;
                });

                this._vehiculos.getVehiculos().subscribe((vehiculos:any) =>{
                  this.vehiculos=vehiculos;
                });

                this._mantenimientos.getMantenimiento( this.idx ).subscribe((manten:any) =>{
                  this.manten=manten;
                  console.log(this.manten);
                });

                this.crearFormulario();
              }

  ngOnInit(): void {
    this.idx = this.activatedRoute.snapshot.params['id'];
  }


  crearFormulario(){
    this.formMantenimiento = new FormGroup({
      idmantenimiento: new FormControl(),
      fechamantenimiento: new FormControl(),
      mantenimiento: new FormControl(),
      proveedor: new FormControl(),
      coste: new FormControl(),
      numfactura: new FormControl(),
      tipomante: new FormControl(),
      idvehiculo: new FormControl()
    });

  }


  validarFormulario(form: NgForm) {
    if (this.formMantenimiento.invalid) {
      return Object.values(this.formMantenimiento.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }
  }


  onChange(newValue:any) {
    this.control = this.formMantenimiento.controls['idvehiculo'].value;
    this.control = newValue;  // don't forget to update the model here
    this.idvehiculo=Number(newValue&&newValue.substring(0,2));
    console.log(this.idvehiculo);
    //this._vehiculos.getVehiculo( this.idvehiculo ).subscribe();
    //console.log(this.idvehiculo);

    return this.idvehiculo;
  }

  onChangeTipoMante( newVal:any) {
    this.controlTipoMantenimento = this.formMantenimiento.controls['tipomante'].value;
    this.control = newVal;
    this.idTipoMante = Number(newVal&&newVal.substring(0,2));
    console.log(this.idTipoMante);
    return this.idTipoMante;
  }


  get mantenimientoNoValida(){
    return this.formMantenimiento.get('mantenimiento')?.invalid && this.formMantenimiento.get('mantenimiento')?.touched;
  }

  get tipomanteNoValida(){
    return this.formMantenimiento.get('tipomante')?.invalid && this.formMantenimiento.get('tipomante')?.touched;
  }

  get costeNoValida(){
    return this.formMantenimiento.get('coste')?.invalid && this.formMantenimiento.get('coste')?.touched;
  }

  get fechamantenimientoNoValida(){
    return this.formMantenimiento.get('fechamantenimiento')?.invalid && this.formMantenimiento.get('fechamantenimiento')?.touched;
  }


  guardarMantenimiento(){
    this.mantenimiento.idvehiculo = this.idvehiculo;
    this.mantenimiento.tipomante = this.idTipoMante;
    this.mantenimiento.coste = Number(this.formMantenimiento.controls['coste'].value);
    this.mantenimiento.mantenimiento = this.formMantenimiento.controls['mantenimiento'].value;
    this.mantenimiento.numfactura = this.formMantenimiento.controls['numfactura'].value;
    this.mantenimiento.proveedor = this.formMantenimiento.controls['proveedor'].value;
    this.mantenimiento.fechamantenimiento = this.formMantenimiento.controls['fechamantenimiento'].value;
    return this._mantenimientos.postMantenimiento( this.mantenimiento ).subscribe();
  }

}
