import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import { LoginCheckService} from '../login-check.service';
import {Observable} from "rxjs/Observable";
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
            this.loginService.setLogin(this.dataCheck.login);
            if (this.dataCheck.login === true) {
              console.log("SIIIII");
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
        console.log("Error occured");
      });
  }

  ngOnInit() {
    
  }


  






}
