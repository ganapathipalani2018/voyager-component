import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openNav(){
    document.getElementById("mySidenav").style.width = "250px";
  }
  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }

}
