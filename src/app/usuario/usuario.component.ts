import { Component, OnInit } from '@angular/core';
import {Usuario} from "../usuario"

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario:Usuario;
  constructor() { }
  //this.usuario=new Usuario(12,"Pepe","Admin","p@p.com","912345678");
  ngOnInit() {
  }

}
