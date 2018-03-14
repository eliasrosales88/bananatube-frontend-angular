import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user:Usuario;
  url:string;
  data:any;
  mensaje:string;
  constructor(private http: HttpClient,private router: Router) { 
    this.user=new Usuario(0,"","","");
    this.url="http://localhost:3000/api/registro";
    this.mensaje="";
  }
  onSubmit(registerForm){
    console.log(this.user);
    this.http.post(this.url,this.user).subscribe(
      data =>{
        this.data = data;
        console.log(this.data);
        this.mensaje="done";
        this.router.navigate(['/login']);
      } ,
      err => {
        console.log("Error occured");
      });
  }

  ngOnInit() {
  }

}
