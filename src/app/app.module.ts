import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { VentasModule } from './ventas/ventas.module';


//Cambiar el idioma de la app

import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import {  registerLocaleData} from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    ShareModule,
    VentasModule
  ],
  providers: [
    { provide:LOCALE_ID,useValue:'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
