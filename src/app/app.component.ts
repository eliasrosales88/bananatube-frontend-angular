import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
  title = 'app';
  muestrameSidebar = false;
  urlCheck:string;
  dataCheck:any;
  mensaje:string;

  @Input()loginCheck:any;
  constructor(
    private http: HttpClient,private router: Router
  ){ }
  
  setUserIsLogged(data){
    console.log(data);
  }
 
  toggleSidebar(){
    this.muestrameSidebar = !this.muestrameSidebar;
  }

  loginValidacion(){
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

  ngOnInit(){
  }
}


