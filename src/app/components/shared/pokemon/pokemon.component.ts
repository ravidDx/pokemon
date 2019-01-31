import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../../../interfaces/pokemon.interface';
import {PokemonService} from '../../../services/pokemon.service';

import {ActivatedRoute, Router} from '@angular/router';




@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {


  id:string;

  pokemon:Pokemon = {
    nombre:"",
    bio:"",
    url:"https://www.serebii.net/potw-dp/225-i.jpg",
    tipo:"Agua"
  }
  constructor(private _pokemonService:PokemonService,
              private _router:Router, 
              private _activatedRoute:ActivatedRoute) 
  {

    this._activatedRoute.params.
      subscribe(
        parametros =>{
          
          this.id=parametros['id'];
          if(this.id!== 'nuevo'){
              this._pokemonService.getPokemon(this.id).
                subscribe(
                  resultado=>{
                    console.log(resultado);
                    this.pokemon=resultado;

                  },
                  error=>{
                    console.log(error);
                  }
                );
          }
        }

      );


  }

  ngOnInit() {
  }


  guardar(){
    console.log(this.pokemon);

    if(this.id=="nuevo"){

          this._pokemonService.nuevoPokemon(this.pokemon).subscribe(

            data=>{
              //console.log(data['name']);
              this._router.navigate(['/pokemon', data['name']]);
            },
            error=>{
              console.log(error);
            }

          );

    }else{
      this._pokemonService.editarPokemon(this.pokemon,this.id).subscribe(

        data=>{
          this._router.navigate(['/pokemones']);

        },
        error=>{
          console.log(error);

        }

      );
    }

  }



}
