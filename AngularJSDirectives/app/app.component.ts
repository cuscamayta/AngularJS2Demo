import { Component } from '@angular/core';
import {EstudiantesComponent} from './estudiantes.component'

@Component({
  selector: 'my-app',
  template: '<h1>Aprende Angular 2 Fácilmente</h1><estudianteComp></estudianteComp>',
  directives: [EstudiantesComponent]
})
export class AppComponent { }