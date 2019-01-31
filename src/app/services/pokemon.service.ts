import { Injectable } from '@angular/core';
import {Pokemon} from '../interfaces/pokemon.interface';


//version nueva para servicos resfult
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokedexUrl="https://pokemon-1b77a.firebaseio.com/pokemon.json";	
  pokemonUrl="https://pokemon-1b77a.firebaseio.com/pokemon";
  
  constructor(private _http:HttpClient) { }

  nuevoPokemon(nuevo:Pokemon):Observable<Pokemon>{
    return this._http.post<Pokemon>(this.pokedexUrl,nuevo);
  }


  consultarPokedex():Observable<Pokemon[]>{
  	return this._http.get<Pokemon[]>(this.pokedexUrl);
  }

  getPokemon(indice:string){

  	let url =`${this.pokemonUrl}/${indice}.json`;
  	return this._http.get<Pokemon>(url);

  }

  editarPokemon(pokemon:Pokemon,indice:string){

  	let url =`${this.pokemonUrl}/${indice}.json`;
  	return this._http.put<Pokemon>(url,pokemon);

  }

  eliminarPokemon(indice:string){
  	let url =`${this.pokemonUrl}/${indice}.json`;
  	return this._http.delete(url);
  }


}
