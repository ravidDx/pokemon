import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonajeService,Personaje} from '../../../services/app.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  personaje:Personaje ={
    nombre:'',
    descripcion:'',
    numero:0,
    tipo:'',
    fecha:'',
    img:'',
    evolucion:'',
    nomEvolucion:''
  };

  constructor(private _activeRoute:ActivatedRoute,
              private _personajeService:PersonajeService,
              private _router:Router) 
  { 
    this._activeRoute.params.subscribe(
      params =>{
        console.log(params['id']);
        this.personaje = this._personajeService.getPersonaje(params['id']);
        console.log(this.personaje);
      }
    );

  }

  ngOnInit() {

  }

  regresar(){
    this._router.navigate(['personajes']);
  }

}

