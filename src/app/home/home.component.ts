import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  video:Video;
  url:string;
  data:any;
  mensaje:string;

  constructor(private http: HttpClient,private router: Router) { 
  this.video = new Video("","","",true);
  this.url = "http://localhost:3000/api/videos";
  this.mensaje = "";
  }

  ngOnInit() {
    console.log(this.video);
    this.http.get(this.url).subscribe(
      data =>{
        this.data = data;
        console.log(this.data);
        this.mensaje="done";
        this.router.navigate(['']);
      } ,
      err => {
        console.log("Error occured");
      });
  }

}
