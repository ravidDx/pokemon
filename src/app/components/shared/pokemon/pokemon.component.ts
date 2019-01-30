import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../../interfaces/pokemon.interface';



@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon:Pokemon = {
    nombre:"",
    bio:"",
    url:"",
    tipo:"Agua"
  }
  constructor() { }

  ngOnInit() {
  }

}
