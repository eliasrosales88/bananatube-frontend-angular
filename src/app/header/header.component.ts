import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginCheckService } from '../login-check.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[LoginCheckService]
})
export class HeaderComponent implements OnInit {
  url:string;
  urlCheck:string;
  data:any;
  dataCheck:any;
  mensaje:string;
  loginCheck:Observable<any>;
  loginStatus:boolean;
  public static updateUserStatus: Subject<boolean> = new Subject();
  user:any;
  
  constructor(private http: HttpClient,private router: Router,private loginService: LoginCheckService){
    this.url="http://localhost:3000/api/login";
    this.urlCheck="http://localhost:3000/api/loginCheck";
    this.loginCheck=this.loginService.loginChecker();
    this.loginCheck.subscribe(this.manejaLoginCheck.bind(this));
    this.mensaje="";
    HeaderComponent.updateUserStatus.subscribe(res => {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user.login, "Al fin");
    this.loginStatus =this.user.login;
    })
  }

  @Output() hamburguesaClickeada = new EventEmitter<any>();
  notificaHamburguesaClickeada(): void {
    console.log('la hamburguesa ha sido clickeada');
    this.hamburguesaClickeada.emit();
  }
   

  manejaLoginCheck(dato){
    console.log(dato);
    this.loginStatus=dato;
  }
  
  ngOnInit() {
    console.log(this.loginCheck);
    //console.log(this.loginStatus, "hola");
    if (window.localStorage) {

      console.log(localStorage.user);
    }
    else {
      throw new Error('Tu Browser no soporta LocalStorage!');
    }
  }
}

