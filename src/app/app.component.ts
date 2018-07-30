import { Component } from '@angular/core';
import { routeList } from './app-routing.module';
import { titleUpdateStream } from './app-routing.module';

//var _titleUpdateStream = titleUpdateStream;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  title = 'Welcome';

  mainMenus = routeList.filter(route => route.data && route.data.mainMenu)

  public constructor() { }
  ngOnInit() {
    titleUpdateStream.subscribe(
      (x: string) => {
        console.log('Next: ' + x);
        this.title = x;
      },
      (err) => {
        console.log('Error: ' + err);
      },
      () => {
        console.log('Completed');
      });
  }
}
