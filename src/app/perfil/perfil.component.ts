import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user:string;
  username:any;
  userId:any;
  userEmail:any;
  urlCheck:any;
  dataCheck:any;

  constructor(private http: HttpClient,private router: Router) {
    this.urlCheck="http://localhost:3000/api/loginCheck";
    this.http.get(this.urlCheck,{withCredentials: true}).subscribe(
      dataCheck =>{
        this.dataCheck = dataCheck;
      console.log(this.dataCheck.usuario._id);
      this.userId = this.dataCheck.usuario._id;
      this.username = this.dataCheck.usuario.username;
      this.userEmail = this.dataCheck.usuario.email;
      } ,
      err => {
        console.log("Error occured");
      });  
  }

  ngOnInit() {
  this.user = window.localStorage.getItem("user");
    console.log(this.user);
    this.userId = this.user;
    console.log(this.userId);
  }

}
