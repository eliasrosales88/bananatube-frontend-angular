import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[]
})
export class HeaderComponent implements OnInit {
  
  
  constructor() {

   }

  @Output() hamburguesaClickeada = new EventEmitter<any>();
  notificaHamburguesaClickeada(): void {
    console.log('la hamburguesa ha sido clickeada');
    this.hamburguesaClickeada.emit();
  }
   
  
   ngOnInit() {
    
  }

}

