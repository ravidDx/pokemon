import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';


//rutas
import {APP_ROUTING} from './app.routes';

//service
import {PersonajeService} from './services/app.service';
import {UsuariosService} from './services/usuarios.service';
import {PokemonService} from './services/pokemon.service';



//Componentes

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/shared/about/about.component';
import { PersonajeComponent } from './components/shared/personaje/personaje.component';
import { BuscarComponent } from './components/shared/buscar/buscar.component';
import { PersonajesComponent } from './components/shared/personajes/personajes.component';
import { TemplateComponent } from './components/shared/template/template.component';
import { PokemonComponent } from './components/shared/pokemon/pokemon.component';
import { PokemonesComponent } from './components/shared/pokemones/pokemones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PersonajeComponent,
    BuscarComponent,
    PersonajesComponent,
    TemplateComponent,
    PokemonComponent,
    PokemonesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [PersonajeService,UsuariosService,PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
