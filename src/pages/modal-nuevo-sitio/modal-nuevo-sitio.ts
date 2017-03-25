import { Component } from '@angular/core';
import { NavController, NavParams , ViewController } from 'ionic-angular';

/*
  Generated class for the ModalNuevoSitio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var google; 

@Component({
  selector: 'page-modal-nuevo-sitio',
  templateUrl: 'modal-nuevo-sitio.html'
})
export class ModalNuevoSitioPage {

coords: any = { lat: 0, lng: 0 }
address: string;

description: string = '';
foto: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl : ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalNuevoSitioPage');
    this.coords.lat=this.navParams.get('lat');
    this.coords.lng = this.navParams.get('lng');

    this.getAddress(this.coords).then(results=> {
        this.address = results[0]['formatted_address'];
      }, errStatus => {
          // Aquí iría el código para manejar el error
      });

  }

  cerrarModal(){
     this.viewCtrl.dismiss();
   }


   getAddress(coords):any {
    var geocoder = new google.maps.Geocoder();

    return new Promise(function(resolve, reject) {
        geocoder.geocode({'location': coords} , function (results, status) { // llamado asincronamente
            if (status == google.maps.GeocoderStatus.OK) {
                resolve(results);
            } else {
                reject(status);
            }
        });
    });
}



}
