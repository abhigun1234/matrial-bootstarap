import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstarp',
  templateUrl: './bootstarp.component.html',
  styleUrls: ['./bootstarp.component.css']
})
export class BootstarpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myBootStarpDemo()
  {
   alert('this is a demo of boot starp')

  }
}
