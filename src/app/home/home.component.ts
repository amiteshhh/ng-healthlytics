import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output()
  authorClick: EventEmitter<String> = new EventEmitter<String>(); //creating an output event
  constructor() { }

  ngOnInit() {
    this.authorClick.emit('Home');
  }

}
