import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  ngOnInit(){}
  lat = 51.678418;
  lng = 7.809007;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  // zoom = 12
  // center: google.maps.LatLngLiteral
  // options: google.maps.MapOptions = {
  //   mapTypeId: 'hybrid',
  //   zoomControl: false,
  //   scrollwheel: false,
  //   disableDoubleClickZoom: true,
  //   maxZoom: 15,
  //   minZoom: 8,
  // }

  // ngOnInit() {

  // 	navigator.geolocation.getCurrentPosition((position) => {
  //     this.center = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //     }
  //   })

  // }

  // zoomIn() {
  //   if (this.zoom < this.options.maxZoom) this.zoom++
  // }

  // zoomOut() {
  //   if (this.zoom > this.options.minZoom) this.zoom--
  // }



}
