import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../../services/usuarios.service';
import {Usuario} from '../../../interfaces/usuario.interface';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  habilitado:boolean = true;
  usuario:Usuario = {
    nombre: null,
    apellido:null,
    correo:null
  }

  constructor(private _usuarioService:UsuariosService) { }

  ngOnInit() {
  }

  guardar(forma:any){
    console.log(forma.value.nombre);
    console.log(forma.value.apellido);
    console.log(forma.value.correo);
    console.log(this.usuario);
    this.habilitado=false;

    this._usuarioService.nuevoUsuario(this.usuario).subscribe(
      data =>{
        console.log("data");
        this.habilitado=true;
      }, 
      error=>{
        console.log(error);
      }
    );

  }

}
