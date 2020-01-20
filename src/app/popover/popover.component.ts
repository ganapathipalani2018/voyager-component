import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openPopover(){
    document.getElementById("leftPopover").style.width = "200px";
  }
  closePopover(){
    document.getElementById("leftPopover").style.width = "0";
  }

}
