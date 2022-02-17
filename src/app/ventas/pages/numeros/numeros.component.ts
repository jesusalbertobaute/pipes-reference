import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  ventasNetas: number = 8475766532.335932;
  porcentaje: number = 0.4873;

  constructor() { }

  ngOnInit(): void {
  }

}
