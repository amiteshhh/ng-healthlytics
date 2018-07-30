import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output()
  authorClick: EventEmitter<String> = new EventEmitter<String>(); //creating an output event

  messages = [{
    avatar: 'http://via.placeholder.com/150x100',
    from:'Amitesh',
    subject: 'Check it',
    content: 'Hey Johna! I hope you are doing well'
  },{
    avatar: 'http://via.placeholder.com/150x100',
    from:'Amitesh',
    subject: 'Check it',
    content: 'Hey Johna! I hope you are doing well'
  }]
  constructor() { }

  ngOnInit() {
    this.authorClick.emit('Home');
  }

}
