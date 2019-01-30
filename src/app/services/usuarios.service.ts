import { Injectable } from '@angular/core';
import {Usuario} from '../interfaces/usuario.interface';


//version nueva para servicos resfult
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  usuarioURL:string = 'https://pokemon-api-c8a75.firebaseio.com/pokemon.json';

  constructor(private _http:HttpClient) { }

  nuevoUsuario(nuevo:Usuario):Observable<Usuario>{

    return this._http.post<Usuario>(this.usuarioURL,nuevo);
  }

}

