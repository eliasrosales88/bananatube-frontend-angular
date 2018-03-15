import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginCheckService {
  url:string;
  dataCheck:any;
  mensaje:string;
  promesaDatos:any;
  private loginSource = new BehaviorSubject<any>(false);
  currentLogin = this.loginSource.asObservable();

  constructor(private http: HttpClient) {
    let check;
    this.url="http://localhost:3000/api/loginCheck";
    this.promesaDatos=this.http.get(
      this.url,{withCredentials: true});
    this.mensaje="";
   }

  loginChecker(): Observable<any>{
    console.log(this.loginSource);
    return this.currentLogin;
  }
  setLogin(valor){
    console.log("cambiando valor:"+valor);
    this.loginSource.next(valor);
  }
}
