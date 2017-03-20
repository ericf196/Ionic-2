import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { Platform } from 'ionic-angular';

declare var google: any;


/*
  Generated class for the Inicio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

map: any; // Manejador del mapa.
coords : any = { lat: 0, lng: 0 }

  constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  public  platform: Platform) {

        platform.ready().then(() => {
        // La plataforma esta lista y ya tenemos acceso a los plugins.
          this.obtenerPosicion();
       });

  }



  obtenerPosicion():any{
    Geolocation.getCurrentPosition().then(res => {
      this.coords.lat = res.coords.latitude;
      this.coords.lng = res.coords.longitude;

      this.loadMap();
    })
    .catch(
      (error)=>{
        console.log(error);
      }
    );
  }



  loadMap(){
     let mapContainer = document.getElementById('map');
      this.map = new google.maps.Map(mapContainer, {
        center: this.coords,
        zoom: 12
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
