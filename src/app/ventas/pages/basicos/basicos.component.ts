import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower: string= 'jesus';
  nombreUpper: string= 'JESUS';
  nombreCompleto: string= 'jeSus baUte';

  fecha : Date= new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
