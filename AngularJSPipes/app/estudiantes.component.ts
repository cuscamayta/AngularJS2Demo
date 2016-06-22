import {Component} from "@angular/core"

@Component({
	selector: 'estudiante',
	template: `<div>nombres</div>
			<div>{{estudiante.nombre | lowercase | slice:0:1}} {{estudiante.apellido | uppercase}}</div>
			<div>Fecha Nacimiento</div>
			<div>{{estudiante.fecha | date: 'largeDate' | uppercase}}</div>
			<div>Nota</div>
			<div>{{estudiante.nota }}</div>	`
})

export class EstudianteComponent {
	estudiante = {
		nombre: 'Carlos',
		apellido: 'perez',
		fecha: new Date(1987, 2, 19),
		nota: 95.23
	}
}