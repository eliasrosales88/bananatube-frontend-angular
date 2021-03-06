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
  urlLogout:string;
  data:any;
  dataCheck:any;
  dataLogout:any;
  mensaje:string;
  loginCheck:Observable<any>;
  loginStatus:boolean;
  public static updateUserStatus: Subject<boolean> = new Subject();
  user:any;
  userId:any;
  
  constructor(private http: HttpClient,private router: Router,private loginService: LoginCheckService){
    this.url="http://localhost:3000/api/login";
    this.urlCheck="http://localhost:3000/api/loginCheck";
    this.urlLogout="http://localhost:3000/api/logout";
    this.mensaje="";
    HeaderComponent.updateUserStatus.subscribe(res => {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.loginStatus =this.user.login;
    console.log(this.loginStatus, "Al fin");
    this.userId = this.user.usuario._id;
    console.log(this.userId);
  })
  
  }

  @Output() hamburguesaClickeada = new EventEmitter<any>();
  notificaHamburguesaClickeada(): void {
    console.log('la hamburguesa ha sido clickeada');
    this.hamburguesaClickeada.emit();
  }
   
  logout(){
    if (window.localStorage) {
      localStorage.clear();
    
      this.loginStatus = false;
    
    
      this.router.navigate(['/']);
    
    }else {
      throw new Error('Tu Browser no soporta LocalStorage!');
    }



  }
  
  ngOnInit() {
    
  }
}

