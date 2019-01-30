import {Injectable} from '@angular/core';

@Injectable()

export class PersonajeService{
    private datos:Personaje[]=[
        {
            nombre:'Charmander',
            descripcion:'La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado.',
            numero:5,
            tipo:'Fuego',
            fecha:'1989-12-01',
            img:'assets/charmander.png',
            evolucion:'assets/charmeleon.png',
            nomEvolucion:"charmeleon"
        },
        {
            nombre:'Bulbasaur',
            descripcion:'A Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol.',
            numero:5,
            tipo:'Planta',
            fecha:'1988-01-01',
            img:'assets/bulbasaur.png',
            evolucion:'assets/ivysaur.png',
            nomEvolucion:"ivysaur"
        },
        {
            nombre:'Squirtle',
            descripcion:'El caparazón de Squirtle no le sirve de protección únicamente. Su forma redondeada y las hendiduras que tiene le ayudan a deslizarse en el agua y le permiten nadar a gran velocidad.',
            numero:8,
            tipo:'Agua',
            fecha:'1992-02-12',
            img:'assets/squirtle.png',
            evolucion:'assets/wartortle.png',
            nomEvolucion:"wartortle"
        }
        
    ]
    constructor(){
        console.log("service listo");
    }

    getPersonajes():Personaje[]{
        return this.datos;
    }

    getPersonaje(indice:number):Personaje{
        return this.datos[indice];
    }

    buscarPersonaje(termino:string):Personaje[]{
        let personajesArr:Personaje[] = [];
        termino = termino.toLowerCase();
        for(let personaje of this.datos){
            let nombre = personaje.nombre.toLowerCase();
            if(nombre.indexOf(termino) >= 0){
                personajesArr.push(personaje);
            }
        }
        return personajesArr;
    }
}


export interface Personaje {
    nombre:string;
    descripcion:string;
    numero:number;
    tipo:string;
    fecha:string;
    img:string;
    evolucion:string;
    nomEvolucion:string;
}
