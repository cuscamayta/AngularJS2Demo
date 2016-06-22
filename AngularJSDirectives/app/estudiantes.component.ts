import {Component} from "@angular/core"

@Component({
	selector: 'estudianteComp',
	template: `<div *ngIf="estudiantes.length >0"><ul>
				<li *ngFor="let estudiante of estudiantes; let i = index"><span >{{i}}-{{estudiante}}</span><li>
				</ul></div>`
})

export class EstudiantesComponent {
	estudiantes: Array<string> = ["pedro", "jose", "ramiro"];
	estudiante = {
		nombre:'carlos',
		fecha: new Date()
	}
	clickEstudiante = function(e) {
		console.log(e);
		alert(e.current.Target);
	}
}