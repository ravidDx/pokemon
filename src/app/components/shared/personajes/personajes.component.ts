import { Component, OnInit } from '@angular/core';
import {PersonajeService,Personaje} from '../../../services/app.service';

import {Router} from "@angular/router";


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes:Personaje[] =[];

  constructor(private _personajeService:PersonajeService, 
              private _router:Router) { 
    console.log("constructor de personajes");


  }

  ngOnInit() {
    console.log("ngOnit");
    this.personajes=this._personajeService.getPersonajes();
    console.log(this.personajes);
  }

  verPersonaje(indice:number){
    this._router.navigate(['/personaje',indice]);
  }

}
