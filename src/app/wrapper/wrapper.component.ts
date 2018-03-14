import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  muestrameSidebar = false;
  constructor() { }

  ngOnInit() {
  }
  toggleSidebar(){
    this.muestrameSidebar = !this.muestrameSidebar;
  }
}
