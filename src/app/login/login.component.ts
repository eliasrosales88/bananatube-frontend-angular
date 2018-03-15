import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginCheckService } from '../login-check.service';
import { Observable } from "rxjs/Observable";
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginCheckService]
})
export class LoginComponent implements OnInit {
  user:Usuario;
  url:string;
  urlCheck:string;
  data:any;
  dataCheck:any;
  mensaje:string;
  loginCheck:Observable<any>;
  loginStatus:boolean;


  
  constructor(private http: HttpClient,private router: Router,private loginService: LoginCheckService){
    this.user=new Usuario("","");
    this.url="http://localhost:3000/api/login";
    this.urlCheck="http://localhost:3000/api/loginCheck";
    this.loginCheck=this.loginService.loginChecker();
    this.loginCheck.subscribe(this.manejaLoginCheck.bind(this));
    this.mensaje="";
  }
  manejaLoginCheck(dato){
    console.log("dato cambiado: "+dato)
    this.loginStatus=dato;
    

  }
 
 @Output() userHasBeingLogged = new EventEmitter<any>();
 emitUserIsLogged(data): void {
    this.userHasBeingLogged.emit(data);
  }

 
  onSubmit(loginForm){
    console.log(this.user);
    this.http.post(this.url,this.user,{withCredentials: true}).subscribe(
      data =>{
        this.data = data;
        console.log(this.data);
        this.http.get(this.urlCheck,{withCredentials: true}).subscribe(
          dataCheck =>{
            this.dataCheck = dataCheck;
            console.log(this.dataCheck);
            //notiticar el login
            //this.loginService.setLogin(this.dataCheck.login);
            this.emitUserIsLogged(dataCheck);

            if (window.localStorage) {
              HeaderComponent.updateUserStatus.next(true); // here!

              localStorage.setItem("user", JSON.stringify(this.dataCheck));
            
              let user = localStorage.getItem("user");
            
              //localStorage.removeItem("user");
            }
            else {
              throw new Error('Tu Browser no soporta LocalStorage!');
            }
            this.mensaje="done";
          } ,
          err => {
            console.log("Error occured");
          });
        this.mensaje="done";
        
        this.router.navigate(['/']);
      } ,
      err => {
        console.log("Error ocured. Usuario no encontrado");
      });
  }

  ngOnInit() {
    
  }


  






}
