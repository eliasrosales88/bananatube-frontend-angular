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
  urlVideos:any;
  dataCheck:any;
  dataVideos:any;
  videoId:any;
  videoTitulo:any;
  videoDesc:any;
  videoUrl:any;
  videoCreatedAt:any;
  muestraVideos:boolean = false;
  
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

  getVideos(){
    console.log(this.userId);
    this.urlVideos = "http://localhost:3000/api/user/videos/"+ this.userId;
      console.log(this.urlVideos);
      this.http.get(this.urlVideos,{withCredentials: true}).subscribe(
        dataVideos =>{
          this.dataVideos = dataVideos;
        console.log(this.dataVideos);
        this.videoId = this.dataVideos._id;
        this.videoTitulo = this.dataVideos.titulo;
        this.videoDesc = this.dataVideos.descripcion;
        this.videoUrl = "http://localhost:3000/"+ this.dataVideos;
        this.videoCreatedAt = this.dataVideos.createdAt;
        this.muestraVideos = !this.muestraVideos;
        } ,
        err => {
          console.log("Error occured");
        });
  }

  ocultaVideos(){
    this.muestraVideos = !this.muestraVideos;
  }

  ngOnInit() {
  this.user = window.localStorage.getItem("user");
    console.log(this.user);
    this.userId = this.user;
    console.log(this.userId);
  }

}
