import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  constructor() { }

  @Output() sombraClickeada = new EventEmitter<any>();
  notificaSombraClickeada(): void {
    console.log('La sombra ha sido clickeada');
    this.sombraClickeada.emit();
  }

  ngOnInit() {
  }

}
