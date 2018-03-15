import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:Usuario;
  url:string;
  urlCheck:string;
  data:any;
  dataCheck:any;
  mensaje:string;
  constructor(private http: HttpClient,private router: Router){
    this.user=new Usuario("","");
    this.url="http://localhost:3000/api/login";
    this.urlCheck="http://localhost:3000/api/loginCheck";

    this.mensaje="";
  }

  onSubmit(loginForm){
    console.log(this.user);
    this.http.post(this.url,this.user,{withCredentials: true}).subscribe(
      data =>{
        this.data = data;
        console.log(this.data);
        this.mensaje="done";
        this.router.navigate(['/']);
        
      } ,
      err => {
        console.log("Error occured");
      });
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
