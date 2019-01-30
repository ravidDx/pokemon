import {RouterModule,Routes} from '@angular/router';

import {HomeComponent} from './components/shared/home/home.component';
import {AboutComponent} from './components/shared/about/about.component';
import {PersonajeComponent} from './components/shared/personaje/personaje.component';
import {PersonajesComponent} from './components/shared/personajes/personajes.component';
import {BuscarComponent} from './components/shared/buscar/buscar.component';
import {PokemonesComponent} from './components/shared/pokemones/pokemones.component';
import {PokemonComponent} from './components/shared/pokemon/pokemon.component';

const APP_ROUTES:Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'personajes', component:PersonajesComponent},
    {path: 'personaje/:id', component:PersonajeComponent},
    {path: 'buscar/:termino', component:BuscarComponent},
    {path: 'pokemon/:id', component:PokemonComponent},
    {path: 'pokemones', component:PokemonesComponent},
    {path:'**', pathMatch:'full',redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);