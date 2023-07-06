import { Component,OnInit,ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
constructor(){}
ngOnInit(): void {
  // console.log("This is latitude :"+this.display.lat)
}
//info
@ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  
display: any;
    center: google.maps.LatLngLiteral = {
        lat: 24,
        lng: 12
    };
    zoom = 4;
    moveMap(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.center = (event.latLng.toJSON());
    }
    move(event: google.maps.MapMouseEvent) {
        if (event.latLng != null) this.display = event.latLng.toJSON();
    }

  // code for map-marker
//   markerOptions: google.maps.MarkerOptions = {
//       draggable: false
//   };
//   //add marker in map
//   markerPositions: google.maps.LatLngLiteral[] = [];
//   addMarker(event: google.maps.MapMouseEvent) {
//       if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
//   }
// //add info in map
//   openInfoWindow(marker: MapMarker) {
//     if (this.infoWindow != undefined) this.infoWindow.open(marker);
// }

}
