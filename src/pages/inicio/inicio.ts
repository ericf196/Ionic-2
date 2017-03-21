import { Component } from '@angular/core';
import { NavController, NavParams , ModalController} from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { ModalNuevoSitioPage } from '../modal-nuevo-sitio/modal-nuevo-sitio';


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
  public modalCtrl : ModalController,
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

      this.initMap();
    })
    .catch(
      (error)=>{
        console.log(error);
      }
    );
  }


  initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: myLatLng
    });

     var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }

  nuevoSitio(){
    // aquí vamos a abrir el modal para añadir nuestro sitio.
     let mimodal = this.modalCtrl.create( ModalNuevoSitioPage,this.coords );
     mimodal.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
