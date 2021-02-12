import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {

  listaProduct: string[]=['Manteca','Arroz','Azucar'];

  habilitar: boolean = true;


}
