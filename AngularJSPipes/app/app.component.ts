import { Component } from '@angular/core';
import {EstudianteComponent} from './estudiantes.component'

@Component({
  selector: 'my-app',
  template: '<h1>Aprende Angular 2 Fácilmente</h1><estudiante></estudiante>',
  directives: [EstudianteComponent]
})
export class AppComponent { }