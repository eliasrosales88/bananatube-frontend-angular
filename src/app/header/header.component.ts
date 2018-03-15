import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[]
})
export class HeaderComponent implements OnInit {
  urlCheck:string;
  dataCheck:any;
  mensaje:string;
  constructor(private http: HttpClient,private router: Router){
    this.urlCheck="http://localhost:3000/api/loginCheck";
    this.mensaje="";
   }

  @Output() hamburguesaClickeada = new EventEmitter<any>();
  notificaHamburguesaClickeada(): void {
    console.log('la hamburguesa ha sido clickeada');
    this.hamburguesaClickeada.emit();
  }
   
  
  ngOnInit() {
    this.http.get(this.urlCheck,{withCredentials: true}).subscribe(
      dataCheck =>{
        this.dataCheck = dataCheck;
        console.log(this.dataCheck);
        this.mensaje="done";
      } ,
      err => {
        console.log("Error occured");
      });
  }

}

