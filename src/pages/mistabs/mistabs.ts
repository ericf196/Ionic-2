import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio'
import { ListadosPage } from '../listados/listados'
import { InfoPage } from '../info/info'

/*
  Generated class for the Mistabs tabs.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Component({
  selector: 'page-mistabs',
  templateUrl: 'mistabs.html'
})
export class MistabsPage {

  tab1Root: any = InicioPage;
  tab2Root: any = ListadosPage;
  tab3Root: any = InfoPage;

  constructor(public navCtrl: NavController) {

  }

}
