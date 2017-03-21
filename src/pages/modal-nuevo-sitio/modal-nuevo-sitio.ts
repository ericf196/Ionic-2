import { Component } from '@angular/core';
import { NavController, NavParams , ViewController } from 'ionic-angular';

/*
  Generated class for the ModalNuevoSitio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-nuevo-sitio',
  templateUrl: 'modal-nuevo-sitio.html'
})
export class ModalNuevoSitioPage {

coords: any = { lat: 0, lng: 0 }

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl : ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNuevoSitioPage');
    this.coords.lat=this.navParams.get('lat');
    this.coords.lng = this.navParams.get('lng');

  }

  cerrarModal(){
     this.viewCtrl.dismiss();
   }



}
