import { Component, OnInit } from '@angular/core';
import {PersonajeService,Personaje} from '../../../services/app.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  personajes:Personaje[] = [];

  constructor(private _personajeService:PersonajeService,
              private _activatedRoute:ActivatedRoute) {


   }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params=>{
      this.personajes = this._personajeService.buscarPersonaje(params['termino']);
      console.log(params['termino']);
    });
    
  }

}
