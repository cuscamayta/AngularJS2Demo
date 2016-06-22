import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{titulo}}</h1><img src="{{img}}"/><img [src]="img" [class.img-redondeada]="redondeadas"/>
  <button (click)="alerta($event)">Test</button>
  <input type="text" [(ngModel)]="titulo">
  `
})
export class AppComponent {
  titulo: string = "Aprende Angular 2 Fácilmente";
  img: string = '/app/img/image.jpg';
  redondeadas: Boolean = false;
  alerta = function(e) {
    alert('esta es una alerta');
  }
}