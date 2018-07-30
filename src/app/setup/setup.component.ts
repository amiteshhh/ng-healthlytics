import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  lookupCategories = [
    {
      id: 0, name: 'Add', icon: 'add_circle', description: 'Tap to add a new item category'
    },
    {
      id: 1, name: 'Food', icon: 'fastfood', description: 'List of food items that you love'
    }]
  constructor() { }

  ngOnInit() {
  }

}
