import { Component, OnInit } from '@angular/core';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Polygon,
  MarkerIcon,
  LocationService as Location,
  MyLocation,
  LatLngBounds,
  LatLng,
  BaseArrayClass,
  Environment
} from '@ionic-native/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  map: GoogleMap;

  constructor() {}

  ngOnInit() {
    this.loadMap()
  }


  loadMap() {
    Location.getMyLocation().then((myLocation: MyLocation) => {

      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBqy9liRpx2tetO43SZZyjhHMrW_GX7uZk',
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBqy9liRpx2tetO43SZZyjhHMrW_GX7uZk'
      });  

      let mapOptions: GoogleMapOptions = {
        camera: {
           target: myLocation.latLng,
           zoom: 14,
           tilt: 30,
         },
         preferences: {
           zoom: {minZoom: 6, maxZoom: 20}
         },
         controls: {
           myLocation: true
         }
      };
      
      /// CREATE THE MAP AND INITIALIZE MY LOCATION
      this.map = GoogleMaps.create('map_canvas', mapOptions)
      this.map.setMyLocationEnabled(true)

    })
    
  }

}
