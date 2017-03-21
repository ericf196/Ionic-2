import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MistabsPage } from '../pages/mistabs/mistabs';
import { InicioPage } from '../pages/inicio/inicio';
import { ListadosPage } from '../pages/listados/listados';
import { InfoPage } from '../pages/info/info';
import { ModalNuevoSitioPage } from '../pages/modal-nuevo-sitio/modal-nuevo-sitio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MistabsPage,
    InicioPage,
    ListadosPage,
    InfoPage,
    ModalNuevoSitioPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MistabsPage,
    InicioPage,
    ListadosPage,
    InfoPage,
    ModalNuevoSitioPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
