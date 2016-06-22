



import { Component } from '@angular/core';
import {EstudiantesComponent} from './estudiantes.component'
import {DocentesComponent} from './docente.component'

@Component({
  selector: 'my-app',
  template: '<h1>Aprende Angular 2 Dificilmente</h1><estudiantes></estudiantes><docentes></docentes>',
  directives: [EstudiantesComponent, DocentesComponent]
})



export class AppComponent { }