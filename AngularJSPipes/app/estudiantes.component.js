"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var EstudianteComponent = (function () {
    function EstudianteComponent() {
        this.estudiante = {
            nombre: 'Carlos',
            apellido: 'perez',
            fecha: new Date(1987, 2, 19),
            nota: 95.23
        };
    }
    EstudianteComponent = __decorate([
        core_1.Component({
            selector: 'estudiante',
            template: "<div>nombres</div>\n\t\t\t<div>{{estudiante.nombre | lowercase | slice:0:1}} {{estudiante.apellido | uppercase}}</div>\n\t\t\t<div>Fecha Nacimiento</div>\n\t\t\t<div>{{estudiante.fecha | date: 'largeDate' | uppercase}}</div>\n\t\t\t<div>Nota</div>\n\t\t\t<div>{{estudiante.nota }}</div>\t"
        }), 
        __metadata('design:paramtypes', [])
    ], EstudianteComponent);
    return EstudianteComponent;
}());
exports.EstudianteComponent = EstudianteComponent;
//# sourceMappingURL=estudiantes.component.js.map