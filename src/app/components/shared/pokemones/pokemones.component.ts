import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../../interfaces/pokemon.interface';
import {PokemonService} from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {

   pokedex:Pokemon[]=[];

  constructor(private _pokemonService:PokemonService) { 

  	this._pokemonService.consultarPokedex()
	  	.subscribe(

	  		data=>{
	  			
	  			for(let key$ in data){
	  				//console.log(data[key$]);
	  				let pokemonNew = data[key$];
	  				pokemonNew['id']=key$;
	  				this.pokedex.push(pokemonNew);
	  			}
	  			console.log(this.pokedex);

	  		},
	  		error=>{
	  			console.log(error);
	  		}

	  	);

  }

  ngOnInit() {
  }


  eliminar(indice:string, posicion:number){

  	this._pokemonService.eliminarPokemon(indice).
  		subscribe(
  			data=>{
  				console.log("Se elimino");
  				this.pokedex.splice(posicion,1);

  			},
  			error=>{
  				console.log(error);
  			}

  		);
  }


}
