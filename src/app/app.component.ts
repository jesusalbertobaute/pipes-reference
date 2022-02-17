import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'; //Para efecto de splash de botones y Menu

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'pipesApp';
  nombre: string = 'hola mundo';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
