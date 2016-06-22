import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router'
import {InicioComponent} from './inicio.component'
import {ContactenosComponent} from './contactenos.component'
import {NosotrosComponent} from './nosotros.component'



@Routes([
    { path: '/', component: InicioComponent },
    { path: '/contactenos', component: ContactenosComponent },
    { path: '/nosotros', component: NosotrosComponent },
    { path: '*', component: InicioComponent }
])



@Component({
    selector: 'my-app',
    templateUrl:'/app/app.component.html',
    directives:[ROUTER_DIRECTIVES]
})
export class AppComponent { }


