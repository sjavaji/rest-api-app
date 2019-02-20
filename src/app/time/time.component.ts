import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  todate: any;
  constructor() { 
    setInterval( () => {this.todate = Date.now()} , 1000);
  }

  ngOnInit() {
  }

}
