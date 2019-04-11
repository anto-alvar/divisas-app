import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent implements OnInit {

  nombre: string;
  apellidos: string;
  nTelefono: number;
  nCuenta: string;




  constructor() {
    this.nombre = "Isidro";
    this.apellidos = "García López";
    this.nTelefono = 697770415;
    this.nCuenta = "ES 0000078453J"

   }

  ngOnInit() {
  }

}
